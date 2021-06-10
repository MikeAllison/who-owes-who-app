import { Transaction } from './transaction.js';
import { ActiveTransactionsTable } from './active-transactions-table.js';
import { TallySection } from './tally-section.js';
import { BasicModal } from './basic-modal.js';

class App {
  constructor() {
    //this.API_URI = 'http://localhost:3000';
    this.API_URI = 'https://who-owes-who-api.herokuapp.com';
    this.merchantList = [];
    this.activeTransactions = [];
    this.tallies = new Map();
    this.merchantSelectField = document.getElementById('merchant-select-field');
    this.merchantSelect = document.getElementById('merchant-select');
    this.newMerchantField = document.getElementById('new-merchant-field');
    this.newMerchantInput = document.getElementById('new-merchant-input');
    this.merchantToggleBtn = document.getElementById('merchant-toggle-btn');
    this.amountInput = document.getElementById('amount-input');
    this.submitBtnSection = document.getElementById('submit-btn-section');
    this.tallySection = new TallySection('tally-section');
    this.activeTransactionsTable = new ActiveTransactionsTable(
      'active-transactions'
    );
    this.basicModal = new BasicModal('basic-modal');
  }

  init() {
    this.basicModal.init();

    // *******************************
    // FETCH NON-ARCHIVED TRANSACTIONS
    // *******************************
    fetch(`${this.API_URI}/transactions/active`)
      .then(response => response.json())
      .then(data => {
        data.forEach(card => {
          // Add the cardholder to the tallies map
          if (!this.tallies.has(card.cardholder)) {
            this.tallies.set(card.cardholder, 0);
          }

          card.transactions.forEach(transaction => {
            // Add .purchaser property onto transaction object
            transaction.purchaser = card.cardholder;
            this.activeTransactions.push(transaction);

            // Add the transaction to the tallies map
            let purchasesTotal = this.tallies.get(card.cardholder);
            purchasesTotal += transaction.amount;
            this.tallies.set(card.cardholder, purchasesTotal);
          });
        });

        // Render dynamic elements to page
        this.tallySection.render(this.tallies);
        this.activeTransactionsTable.render(this.activeTransactions);
      })
      .catch(err => console.log(err));

    // TODO: Extract and refactor
    // ************************
    // INITIALIZE MERCHANT LIST
    // ************************
    $('select.dropdown').dropdown();

    fetch(`${this.API_URI}/merchants`)
      .then(response => response.json())
      .then(data => {
        data.forEach(merchant => {
          this.merchantList.push(merchant);
        });
      })
      .then(() => {
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
    // *************************************
    // INITIALIZE CARD NUMBER SUBMIT BUTTONS
    // *************************************
    fetch(`${this.API_URI}/cards`)
      .then(response => response.json())
      .then(data => {
        data.forEach(card => {
          const btn = document.createElement('button');
          btn.classList = 'ui green button card-btn';
          btn.dataset.cardId = card.id;
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

              const amount = +this.amountInput.value;
              if (isNaN(amount)) {
                throw new Error('Amount Is Not A Number');
              }

              if (!e.currentTarget.dataset.cardId) {
                throw new Error('Missing Card ID');
              }

              const transaction = new Transaction(
                e.currentTarget.dataset.cardId,
                merchantName,
                amount.toFixed(2)
              );

              this.basicModal.setConfirm(transaction);
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
                      .then(response => response.json())
                      .then(location.reload())
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
