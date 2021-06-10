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

    // Get all non-archived transactions
    fetch(`${this.API_URI}/transactions/active`)
      .then(response => response.json())
      .then(data => {
        data.forEach(card => {
          card.transactions.forEach(transaction => {
            transaction.purchaser = card.cardholder;
            this.activeTransactions.push(transaction);

            // Create a tally of all transactions
            if (this.tallies.has(transaction.purchaser)) {
              let purchasesTotal = this.tallies.get(transaction.purchaser);
              purchasesTotal += transaction.amount;
              this.tallies.set(transaction.purchaser, purchasesTotal);
            } else {
              this.tallies.set(transaction.purchaser, transaction.amount);
            }
          });
        });

        // Sort by date desc
        this.activeTransactions.sort((a, b) => {
          return Date.parse(b.date) - Date.parse(a.date);
        });

        // Render dynamic elements to page
        this.tallySection.render(this.tallies);
        this.activeTransactionsTable.render(this.activeTransactions);
      })
      .catch(err => console.log(err));

    // TODO: Extract and refactor
    // Initialize merchant list in form
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
    // Initialize card number submit buttons
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

            // Validate inputs
            try {
              if (!merchantName) {
                throw new Error('Missing Merchant');
              }

              if (!this.amountInput.value) {
                throw new Error('Missing Amount');
              }

              if (!e.currentTarget.dataset.cardId) {
                throw new Error('Missing Card ID');
              }

              const transaction = new Transaction(
                e.currentTarget.dataset.cardId,
                merchantName,
                this.amountInput.value
              );

              this.basicModal.setConfirm(transaction);
              $('.ui.basic.modal')
                .modal('setting', 'closable', false)
                .modal('show');
              // Submit
              console.dir(transaction);
              // Handle submit errors
              // If successful...
              //// Update active transactions
              //// Clear inputs
              this.amountInput.value = null;
            } catch (err) {
              this.basicModal.setError(err.message);
              $('.ui.basic.modal')
                .modal('setting', 'closable', false)
                .modal('show');
            }
          });
        });
      })
      .catch(err => console.log(err));
  }
}

const app = new App();
app.init();
