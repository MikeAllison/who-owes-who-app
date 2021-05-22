import { Transaction } from './transaction.js';

class App {
  static renderHook = document.getElementById('app');

  static init() {
    this.merchantInput = document.getElementById('merchant-input');
    this.amountInput = document.getElementById('amount-input');
    this.cardBtns = document.querySelectorAll('.card-btn');

    this.cardBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        const transaction = new Transaction(
          e.currentTarget.dataset.cardId,
          this.merchantInput.value,
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

App.init();
