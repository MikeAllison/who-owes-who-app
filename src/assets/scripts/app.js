import { Transaction } from './transaction.js';
import { RecentTransactionsTable } from './recent-transactions-table.js';
import { TallySection } from './tally-section.js';
import { BasicModal } from './basic-modal.js';

class App {
  constructor() {
    this.API_URI = 'http://localhost:3000';
    //this.API_URI = 'https://who-owes-who-api.herokuapp.com';
    this.merchantList = [];
    this.recentTransactions = [];
    this.tally = new Map();
    this.merchantSelectField = document.getElementById('merchant-select-field');
    this.merchantSelect = document.getElementById('merchant-select');
    this.newMerchantField = document.getElementById('new-merchant-field');
    this.newMerchantInput = document.getElementById('new-merchant-input');
    this.merchantToggleBtn = document.getElementById('merchant-toggle-btn');
    this.amountInput = document.getElementById('amount-input');
    this.submitBtnSection = document.getElementById('submit-btn-section');
    this.tallySection = new TallySection('tally-section');
    this.recentTransactionsTable = new RecentTransactionsTable(
      'recent-transactions'
    );
    this.basicModal = new BasicModal('basic-modal');
  }

  init() {
    this.basicModal.init();

    // ********************
    //  FETCH TRANSACTIONS
    // ********************
    fetch(`${this.API_URI}/transactions`)
      .then(response => response.json())
      .then(data => {
        data.forEach(card => {
          // Add the cardholder to the tally map
          if (!this.tally.has(card.cardholder)) {
            this.tally.set(card.cardholder, { purchasesTotal: 0 });
          }

          card.transactions.forEach(transaction => {
            // Add .purchaser property onto transaction object
            transaction.purchaser = card.cardholder;
            this.recentTransactions.push(transaction);

            // Add the transaction to the tally map
            this.tally.get(card.cardholder).purchasesTotal +=
              transaction.amount;
          });
        });

        // Render dynamic elements to page
        this.tallySection.render(this.tally);
        this.recentTransactionsTable.render(this.recentTransactions);
      })
      .catch(err => console.log(err));

    // TODO: Extract and refactor
    // **************************
    //  INITIALIZE MERCHANT LIST
    // **************************
    $('select.dropdown').dropdown();

    fetch(`${this.API_URI}/merchants`)
      .then(response => response.json())
      .then(data => {
        data.forEach(merchant => {
          this.merchantList.push(merchant);
        });
      })
      .then(() => {
        this.merchantList.sort((a, b) => {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        this.merchantList.forEach(merchant => {
          const optionEl = document.createElement('option');
          optionEl.setAttribute('value', merchant.name);
          optionEl.innerText = merchant.name;
          this.merchantSelect.appendChild(optionEl);
        });
      })
      .then(() => {
        this.merchantSelect.parentElement.classList.remove('loading');
      })
      .catch(err => console.log(err));

    this.merchantToggleBtn.addEventListener('click', e => {
      e.preventDefault();
      this.merchantSelectField.classList.toggle('hidden');
      this.merchantSelect.value = null;
      this.merchantSelect.parentElement.childNodes[3].classList.add('default');
      this.merchantSelect.parentElement.childNodes[4].childNodes.forEach(node =>
        node.classList.remove('active', 'selected')
      );
      this.merchantSelect.parentElement.childNodes[3].innerText =
        'Select Merchant';
      this.newMerchantField.classList.toggle('hidden');
      this.newMerchantInput.value = null;
      if (this.merchantSelectField.classList.contains('hidden')) {
        this.merchantToggleBtn.innerText = 'Existing Merchant';
      } else {
        this.merchantToggleBtn.innerText = 'New Merchant';
      }
    });

    // TODO: Extract and refactor
    // ***************************************
    //  INITIALIZE CARD NUMBER SUBMIT BUTTONS
    // ***************************************
    fetch(`${this.API_URI}/cards`)
      .then(response => response.json())
      .then(data => {
        data.forEach(card => {
          const btn = document.createElement('button');
          btn.classList = 'ui green button card-btn';
          btn.dataset.cardId = card.id;
          btn.dataset.cardholder = card.cardholder;
          btn.innerText = card.id;
          this.submitBtnSection.appendChild(btn);

          btn.addEventListener('click', e => {
            const merchantName = this.newMerchantInput.value
              ? this.newMerchantInput.value
              : this.merchantSelect.value;

            // Validate submitted data
            try {
              if (!merchantName) {
                throw new Error('Missing Merchant');
              }

              if (!this.amountInput.value) {
                throw new Error('Missing Amount');
              }
              const amount = +(+this.amountInput.value).toFixed(2);
              if (isNaN(amount)) {
                throw new Error('Amount Is Not A Number');
              }

              if (!e.currentTarget.dataset.cardId) {
                throw new Error('Missing Card ID');
              }

              const cardholder = e.target.dataset.cardholder;

              const transaction = new Transaction(
                e.currentTarget.dataset.cardId,
                merchantName,
                amount
              );

              this.basicModal.setConfirm(cardholder, transaction);
              $('.ui.basic.modal')
                .modal({
                  closable: false,
                  detachable: false,
                  duration: 200,
                  onApprove: () => {
                    fetch(`${this.API_URI}/transactions`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(transaction)
                    })
                      .then(response => {
                        location.reload();
                      })
                      .catch(err => {
                        console.log(err);
                        this.basicModal.setError(err.message);
                        $('.ui.basic.modal')
                          .modal({
                            closable: false,
                            detachable: false,
                            duration: 200
                          })
                          .modal('show'); // POST /transactions error modal
                      });
                  }
                })
                .modal('show'); // Transaction input confirmation modal
            } catch (err) {
              this.basicModal.setError(err.message);
              $('.ui.basic.modal')
                .modal({ closable: false, detachable: false, duration: 200 })
                .modal('show'); // Input validation error modal
            }
          });
        });
      })
      .catch(err => console.log(err)); // GET /cards error handling
  }
}

const app = new App();
app.init();
