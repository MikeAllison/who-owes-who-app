import { Transaction } from './transaction.js';
import { RecentTransactionsTable } from './recent-transactions-table.js';

class App {
  constructor() {
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

    // TODO: Remove data
    this.transactions = [
      {
        merhant: 'Solid State',
        date: '5/21/21',
        amount: 20.0
      },
      {
        merhant: 'Sotto Le Stelle',
        date: '4/20/21',
        amount: 10.0
      },
      {
        merhant: 'Grimm',
        date: '4/21/21',
        amount: 30.0
      }
    ];
  }

  init() {
    // Initialize merchant dropdown
    this.merchantList.forEach(merchant => {
      const optionEl = document.createElement('option');
      optionEl.setAttribute('value', merchant.id);
      optionEl.innerText = merchant.name;
      this.merchantSelect.appendChild(optionEl);
    });

    $('select.dropdown').dropdown();

    // Initialize card number submit buttons
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(data => {
        data.cards.forEach(card => {
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
          });
        });
      })
      .catch(err => console.log(err));

    fetch('http://localhost:3000/cards/2662/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    this.recentTransactionsTable.render(this.transactions);
  }
}

const app = new App();
app.init();
