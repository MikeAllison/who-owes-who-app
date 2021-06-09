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
      const date = new Date(transaction.date);
      const month = (1 + date.getMonth()).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const year = date.getFullYear();

      tableEl.innerHTML += `
        <tr>
          <td>${transaction.merchant} - ${month}/${day}/${year}</td>
          <td>
            <i class="green money bill alternate outline icon"></i>
            ${transaction.purchaser} - $${transaction.amount}
          </td>
        </tr>`;
    });

    this.appendChild(tableEl);
    this.renderHook.appendChild(this);
  }
}

customElements.define('recent-transactions-table', RecentTransactionsTable);
