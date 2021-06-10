export class TallySection extends HTMLElement {
  constructor(renderHook) {
    super();
    this.renderHook = document.getElementById(renderHook);
  }

  render(tallies) {
    const higherPayer = [...tallies.entries()].reduce((a, e) =>
      e[1] > a[1] ? e : a
    );

    const lowerPayer = [...tallies.entries()].reduce((a, e) =>
      e[1] < a[1] ? e : a
    );

    // Check for even
    if (higherPayer[1] - lowerPayer[1] === 0) {
      this.innerHTML = `
        <h2 style="margin:0">
          Everyone Is Even!
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
        $${higherPayer[1] - lowerPayer[1]}
      </h3>
    `;

    this.renderHook.appendChild(this);
  }
}

customElements.define('tally-section', TallySection);
