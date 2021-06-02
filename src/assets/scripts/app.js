import { Transaction } from './transaction.js';
import { RecentTransactionsTable } from './recent-transactions-table.js';

class App {
  constructor() {
    this.cardIds = [];
    this.recentTransactions = [];
    this.merchantSelect = document.getElementById('merchant-select');
    this.amountInput = document.getElementById('amount-input');
    this.submitBtnSection = document.getElementById('submit-btn-section');
    this.recentTransactionsTable = new RecentTransactionsTable(
      'recent-transactions'
    );

    // TODO: Remove data
    this.merchantList = [
      { id: 1, name: 'Solid State' },
      { id: 2, name: 'Grimm' },
      { id: 3, name: 'Sotto Le Stelle' }
    ];
  }

  init() {
    // TODO: Initialize merchant dropdown
    // TODO: Add 'loading' icon
    $('select.dropdown').dropdown();
    this.merchantList.forEach(merchant => {
      const optionEl = document.createElement('option');
      optionEl.setAttribute('value', merchant.id);
      optionEl.innerText = merchant.name;
      this.merchantSelect.appendChild(optionEl);
    });

    // Initialize card number submit buttons
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(data => {
        data.cards.forEach(card => {
          this.cardIds.push(card.id);
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
            //// Update recent transactions
            //// Clear inputs
            this.amountInput.value = null;
          });
        });

        this.cardIds.forEach(cardId => {
          // TODO: Make transactions/active (current?)
          fetch(`http://localhost:3000/cards/${cardId}/transactions`)
            .then(response => response.json())
            .then(data => {
              data.transactions.forEach(transaction => {
                this.recentTransactions.push(transaction);
              });
            })
            .catch(err => console.log(err));
        });
      })
      .catch(err => console.log(err));
  }
}

const app = new App();
app.init();
