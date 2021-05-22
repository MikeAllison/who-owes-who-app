export class Transaction {
  constructor(cardId, merchant, amount) {
    this.cardId = cardId;
    this.merchant = merchant;
    this.amount = amount;
  }
}
