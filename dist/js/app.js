import { Transaction } from './transaction.js';

class App {
  constructor() {
    this.merchantSelect = document.getElementById('merchant-select');
    this.amountInput = document.getElementById('amount-input');
    this.cardBtns = document.querySelectorAll('.card-btn');
    this.transactionTableBody = document.getElementById(
      'transaction-table-body'
    );

    this.merchantList = [
      { id: 1, name: 'Solid State' },
      { id: 2, name: 'Grimm' },
      { id: 3, name: 'Sotto Le Stelle' }
    ];

    this.transactionList = [
      {
        merhantName: 'Solid State',
        date: '5/21/21',
        cardholderName: 'Dr. P',
        amount: 20.0
      },
      {
        merhantName: 'Sotto Le Stelle',
        date: '4/20/21',
        cardholderName: 'Dr. P',
        amount: 10.0
      },
      {
        merhantName: 'Grimm',
        date: '4/21/21',
        cardholderName: 'Me',
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
    this.cardBtns.forEach(btn => {
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

    // Initalize recent transactions list
    this.transactionList.forEach(transaction => {
      const trEl = document.createElement('tr');
      trEl.innerHTML = `
        <td>${transaction.merhantName} - ${transaction.date}</td>
        <td><i class="green money bill alternate outline icon"></i>${
          transaction.cardholderName
        } - $${transaction.amount.toFixed(2)}</td>
      `;
      this.transactionTableBody.appendChild(trEl);
    });
  }
}

const app = new App();
app.init();
