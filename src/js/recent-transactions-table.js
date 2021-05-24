export class RecentTransactionsTable extends HTMLTableElement {
  constructor(renderHook) {
    super();
    this.renderHook = document.getElementById(renderHook);
    this.cssClasses = 'ui striped two column green very compact small table';
  }

  render(transactions) {
    this.classList = this.cssClasses;
    transactions.forEach(transaction => {
      this.innerHTML += `<td>${transaction.merhantName} - ${
        transaction.date
      }</td><td><i class="green money bill alternate outline icon"></i>${
        transaction.cardholderName
      } - $${transaction.amount.toFixed(2)}</td>`;
    });
    this.renderHook.appendChild(this);
  }
}

customElements.define('recent-transactions-table', RecentTransactionsTable, {
  extends: 'table'
});
