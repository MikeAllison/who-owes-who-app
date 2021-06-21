import { Transaction } from './transaction.js';

export class TransactionForm extends HTMLElement {
  constructor(API_URI, appModal, renderHook) {
    super();
    this.API_URI = API_URI;
    this.appModal = appModal;
    this.renderHook = document.getElementById(renderHook);

    this.innerHTML = `
      <h2>Transaction Details</h2>
      <form class="ui form">
        <div class="field" id="merchant-select-field">
          <select
            name="merchant-select"
            id="merchant-select"
            class="ui search loading dropdown"
          >
            <option value="">Select Merchant</option>
          </select>
        </div>
        <div class="display-hidden field" id="new-merchant-field">
          <div class="ui fluid left icon input">
            <input placeholder="Merchant Name" id="new-merchant-input" />
            <i class="cart plus icon"></i>
          </div>
        </div>
        <div class="field">
          <button class="ui green basic button" id="merchant-toggle-btn">
            <i class="green cart plus icon"></i>
            New Merchant
          </button>
        </div>
        <div class="field">
          <div class="ui labeled fluid input">
            <label for="amount-input" class="ui label">$</label>
            <input
              inputmode="decimal"
              placeholder="Amount"
              id="amount-input"
            />
          </div>
        </div>
      </form>
      <section class="ui green center aligned segment">
        <h2>Select Card</h2>
        <div class="spaced" id="submit-btn-section"></div>
      </section>
    `;

    this.merchantSelectField = this.querySelector('#merchant-select-field');
    this.merchantSelect = this.querySelector('#merchant-select');
    this.newMerchantField = this.querySelector('#new-merchant-field');
    this.newMerchantInput = this.querySelector('#new-merchant-input');
    this.merchantToggleBtn = this.querySelector('#merchant-toggle-btn');
    this.amountInput = this.querySelector('#amount-input');
    this.submitBtnSection = this.querySelector('#submit-btn-section');
  }

  render(merchants, cards) {
    merchants.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    merchants.forEach(merchant => {
      const optionEl = document.createElement('option');
      optionEl.setAttribute('value', merchant.name);
      optionEl.innerText = merchant.name;
      this.merchantSelect.appendChild(optionEl);
    });

    this.merchantToggleBtn.addEventListener('click', e => {
      e.preventDefault();
      this.merchantSelectField.classList.toggle('display-hidden');
      this.merchantSelect.value = null;
      this.merchantSelect.parentElement.childNodes[3].classList.add('default');
      this.merchantSelect.parentElement.childNodes[4].childNodes.forEach(node =>
        node.classList.remove('active', 'selected')
      );
      this.merchantSelect.parentElement.childNodes[3].innerText =
        'Select Merchant';
      this.newMerchantField.classList.toggle('display-hidden');
      this.newMerchantInput.value = null;
      if (this.merchantSelectField.classList.contains('display-hidden')) {
        this.merchantToggleBtn.innerHTML = `
          <i class="shopping cart icon"></i>
          Existing Merchant'
        `;
      } else {
        this.merchantToggleBtn.innerHTML = `
        <i class="cart plus icon"></i>
          New Merchant
        `;
      }
    });

    cards.forEach(card => {
      const btn = document.createElement('button');
      btn.classList = 'ui green button card-btn';
      btn.dataset.cardId = card.id;
      btn.dataset.cardholder = card.cardholder;
      btn.innerHTML = `<i class="credit card outline icon"></i> ${card.id}`;
      this.submitBtnSection.appendChild(btn);

      btn.addEventListener('click', e => {
        const merchantName = this.newMerchantInput.value
          ? this.newMerchantInput.value
          : this.merchantSelect.value;

        // Validate submitted data
        try {
          if (!merchantName) {
            throw new Error('Missing Merchant');
          }
          if (!this.amountInput.value) {
            throw new Error('Missing Amount');
          }

          const amount = +(+this.amountInput.value).toFixed(2);
          if (isNaN(amount)) {
            throw new Error('Amount Is Not A Number');
          }
          if (!amount > 0) {
            throw new Error('Amount Must Be More Than $0');
          }

          if (!e.currentTarget.dataset.cardId) {
            throw new Error('Missing Card ID');
          }

          const cardholder = e.target.dataset.cardholder;

          const transaction = new Transaction(
            e.currentTarget.dataset.cardId,
            merchantName,
            amount
          );

          this.appModal.setConfirm(cardholder, transaction);
          $(this.appModal.children[0])
            .modal({
              closable: false,
              detachable: false,
              duration: 200,
              onApprove: () => {
                fetch(`${this.API_URI}/transactions`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(transaction)
                })
                  .then(response => {
                    location.reload();
                  })
                  .catch(err => {
                    this.basicModal.setError(err.message);
                    $(this.appModal.children[0])
                      .modal({
                        closable: false,
                        detachable: false,
                        duration: 200
                      })
                      .modal('show'); // POST /transactions error modal
                  });
              }
            })
            .modal('show'); // Transaction input confirmation modal
        } catch (err) {
          this.appModal.setError(err.message);
          $(this.appModal.children[0])
            .modal({ closable: false, detachable: false, duration: 200 })
            .modal('show'); // Input validation error modal
        }
      });
    });

    $(this.merchantSelect).dropdown();
    this.renderHook.appendChild(this);
    this.merchantSelect.parentElement.classList.remove('loading');
  }
}

customElements.define('transaction-form', TransactionForm);
