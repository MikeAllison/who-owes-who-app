export class Transaction {
  constructor(cardId, merchantName, amount) {
    this.cardId = cardId;
    this.merchantName = merchantName;
    this.amount = amount;
  }
}
