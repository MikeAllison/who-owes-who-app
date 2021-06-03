export class RecentTransactionsTable extends HTMLElement {
  constructor(renderHook) {
    super();
    this.renderHook = document.getElementById(renderHook);
    this.cssClasses = 'ui striped two column green very compact small table';
  }

  render(transactions) {
    const tableEl = document.createElement('table');
    tableEl.classList = this.cssClasses;
    transactions.forEach(transaction => {
      tableEl.innerHTML += `
        <tr>
          <td>${transaction.merchant} - ${transaction.date}</td>
          <td>
            <i class="green money bill alternate outline icon"></i>
            ${transaction.cardholder} - $${transaction.amount}
          </td>
        </tr>`;
    });

    this.appendChild(tableEl);
    this.renderHook.appendChild(this);
  }
}

customElements.define('recent-transactions-table', RecentTransactionsTable);
