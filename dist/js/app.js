import { Transaction } from './transaction.js';

class App {
  constructor() {
    this.merchantSelect = document.getElementById('merchant-select');
    this.amountInput = document.getElementById('amount-input');
    this.cardBtns = document.querySelectorAll('.card-btn');

    this.merchantList = [
      { id: 1, name: 'Solid State' },
      { id: 2, name: 'Grimm' },
      { id: 3, name: 'Sotto Le Stelle' }
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
  }
}

const app = new App();
app.init();
