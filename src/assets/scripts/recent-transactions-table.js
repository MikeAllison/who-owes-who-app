export class RecentTransactionsTable extends HTMLElement {
  constructor(renderHook) {
    super();
    this.renderHook = document.getElementById(renderHook);
    this.cssClasses =
      'ui striped three column green very compact small single line table';
    this.innerHTML = `
      <h2>Recent Transactions</h2>
    `;
  }

  render(transactions) {
    if (transactions.length === 0) {
      this.innerHTML += `
        <p>No Transactions</p>
      `;
      this.renderHook.appendChild(this);
      return;
    }

    // Sort transactions by date desc
    transactions.sort((a, b) => {
      return Date.parse(b.enteredDate) - Date.parse(a.enteredDate);
    });

    const tableEl = document.createElement('table');
    tableEl.classList = this.cssClasses;
    const tbodyEl = document.createElement('tbody');

    transactions.forEach(transaction => {
      const enteredDate = new Date(transaction.enteredDate);
      const month = (1 + enteredDate.getMonth()).toString().padStart(2, '0');
      const day = enteredDate.getDate().toString().padStart(2, '0');
      const year = enteredDate.getFullYear();

      tbodyEl.innerHTML += `
        <tr class=${transaction.archived ? 'disabled' : ''}>
          <td>
            ${transaction.merchantName} - ${month}/${day}/${year}
          </td>
          <td>
            <i class="green money bill alternate outline icon"></i>
            ${transaction.purchaser} - $${transaction.amount.toFixed(2)}
          </td>
          <td>
            ${transaction.archived ? 'Archived' : 'Active'}
          </td>
        </tr>`;
    });

    tableEl.append(tbodyEl);
    this.appendChild(tableEl);
    this.renderHook.appendChild(this);
  }
}

customElements.define('recent-transactions-table', RecentTransactionsTable);
