import { Transaction } from './transaction.js';
import { ActiveTransactionsTable } from './active-transactions-table.js';

class App {
  constructor() {
    //this.API_URI = 'http://localhost:3000';
    this.API_URI = 'https://who-owes-who-api.herokuapp.com';
    this.merchantList = [];
    this.activeTransactions = [];
    this.merchantSelectField = document.getElementById('merchant-select-field');
    this.merchantSelect = document.getElementById('merchant-select');
    this.newMerchantField = document.getElementById('new-merchant-field');
    this.newMerchantInput = document.getElementById('new-merchant-input');
    this.merchantToggleBtn = document.getElementById('merchant-toggle-btn');
    this.amountInput = document.getElementById('amount-input');
    this.submitBtnSection = document.getElementById('submit-btn-section');
    this.activeTransactionsTable = new ActiveTransactionsTable(
      'active-transactions'
    );
  }

  init() {
    // Get all non-archived transactions
    fetch(`${this.API_URI}/transactions/active`)
      .then(response => response.json())
      .then(data => {
        data.forEach(card => {
          card.transactions.forEach(transaction => {
            transaction.purchaser = card.cardholder;
            this.activeTransactions.push(transaction);
          });
        });

        // Sort by date desc
        this.activeTransactions.sort((a, b) => {
          return Date.parse(b.date) - Date.parse(a.date);
        });

        this.activeTransactionsTable.render(this.activeTransactions);
      })
      .catch(err => console.log(err));

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
        // TODO: Add 'loading' icon to merchant dropdown
        this.merchantList.forEach(merchant => {
          const optionEl = document.createElement('option');
          optionEl.setAttribute('value', merchant.id);
          optionEl.innerText = merchant.name;
          this.merchantSelect.appendChild(optionEl);
        });
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
            const transaction = new Transaction(
              e.currentTarget.dataset.cardId,
              this.merchantSelect.value,
              this.amountInput.value
            );
            // Check values
            // Submit
            console.dir(transaction);
            // Handle submit errors
            // If successful...
            //// Update active transactions
            //// Clear inputs
            this.amountInput.value = null;
          });
        });
      })
      .catch(err => console.log(err));
  }
}

const app = new App();
app.init();
