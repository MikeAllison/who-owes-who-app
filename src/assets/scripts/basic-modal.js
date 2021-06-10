export class BasicModal extends HTMLElement {
  constructor(renderHook) {
    super();
    this.renderHook = document.getElementById(renderHook);
    this.innerHTML = `
      <div class="ui basic modal">
        <div class="ui icon header"></div>
        <div class="ui content" style="text-align: center"></div>
        <div class="actions" style="text-align: center"></div>
      </div>
    `;
  }

  init() {
    this.renderHook.appendChild(this);
  }

  setError(message) {
    this.querySelector('.header').innerHTML = `
      <i class="red exclamation triangle icon"></i>
      There Was A Problem!
    `;
    this.querySelector('.content').innerHTML = `
      <p>${message}</p>
    `;
    this.querySelector('.actions').innerHTML = `
      <div class="ui red ok inverted button">
        <i class="checkmark icon"></i>
        Go Back
      </div>
    `;
  }

  setConfirm(transaction) {
    this.querySelector('.header').innerHTML = `
      <i class="green question circle outline icon"></i>
      Submit the Following Transaction?
    `;
    this.querySelector('.content').innerHTML = `
      <p><strong>Merchant: </strong>${transaction.merchantName}</p>
      <p><strong>Amount: </strong>$${transaction.amount}</p>
      <p><strong>Card: </strong>${transaction.cardId}</p>
    `;
    this.querySelector('.actions').innerHTML = `
      <div class="ui red basic cancel inverted button">
        <i class="remove icon"></i>
        Cancel
      </div>
      <div class="ui green ok inverted button">
        <i class="checkmark icon"></i>
        Submit
      </div>
    `;
  }
}

customElements.define('basic-modal', BasicModal);
