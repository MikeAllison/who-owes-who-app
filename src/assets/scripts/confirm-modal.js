export class ConfirmModal extends HTMLElement {
  constructor(renderHook) {
    super();
    this.renderHook = document.getElementById(renderHook);
  }

  init() {
    this.innerHTML += `
      <div class="ui basic modal">
        <div class="ui icon header">
          <i class="green money bill outline icon"></i>
          Submit the Following Transaction?
        </div>
        <div class="ui content" style="text-align: center">
        </div>
        <div class="actions" style="text-align: center">
          <div class="ui red basic cancel inverted button">
            <i class="remove icon"></i>
            Cancel
          </div>
          <div class="ui green ok inverted button">
            <i class="checkmark icon"></i>
            Submit
          </div>
        </div>
      </div>
    `;

    this.renderHook.appendChild(this);
  }

  update(transaction) {
    this.querySelector('.content').innerHTML += `
      <p><strong>Merchant: </strong>${transaction.merchantName}</p>
      <p><strong>Amount: </strong>${transaction.amount}</p>
      <p><strong>Card: </strong>${transaction.cardId}</p>
    `;
  }
}

customElements.define('confirm-modal', ConfirmModal);
