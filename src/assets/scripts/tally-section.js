export class TallySection extends HTMLElement {
  constructor(renderHook) {
    super();
    this.renderHook = document.getElementById(renderHook);
  }

  render(tallies) {
    const higherPayer = [...tallies.entries()].reduce((a, e) =>
      e[1].transactionTotal > a[1].transactionTotal ? e : a
    );

    const lowerPayer = [...tallies.entries()].reduce((a, e) =>
      e[1].transactionTotal < a[1].transactionTotal ? e : a
    );

    // Check for even
    const allTransactionTotals = [];
    tallies.forEach(cardholder => {
      allTransactionTotals.push(cardholder.transactionTotal);
    });
    if (allTransactionTotals.every((val, i, arr) => val === arr[0])) {
      this.innerHTML = `
        <h2 style="margin:0">
          We're Even!
        </h2>
        <h3 style="margin-top:4px">
          <i class="green thumbs up outline icon"></i>
        </h3>`;
      this.renderHook.appendChild(this);
      return;
    }

    this.innerHTML = `
      <h2 style="margin:0">
        ${lowerPayer[0]}
        <i class="right green triangle icon"></i>
        ${higherPayer[0]}
      </h2>
      <h3 style="margin-top:4px">
        <i class="green money bill alternate icon"></i>
        $${(
          higherPayer[1].transactionTotal - lowerPayer[1].transactionTotal
        ).toFixed(2)}
      </h3>
    `;

    this.renderHook.appendChild(this);
  }
}

customElements.define('tally-section', TallySection);
