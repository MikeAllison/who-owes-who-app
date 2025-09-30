import { RecentTransactionsTable } from "./recent-transactions-table.js";
import { TallySection } from "./tally-section.js";
import { BasicModal } from "./basic-modal.js";
import { TransactionForm } from "./transaction-form.js";

class App {
  constructor() {
    //this.API_URI = "http://localhost:3000/api";
    this.API_URI = "https://who-owes-who-api-373801.uk.r.appspot.com/api";
    this.authToken = sessionStorage.getItem("wow-token");
    this.merchantList = [];
    this.cardList = [];
    this.recentTransactions = [];
    this.tally = new Map();
    this.loadingMessage = document.getElementById("loading-message");
    this.basicModal = new BasicModal("basic-modal");
    this.tallySection = new TallySection("tally-section");
    this.transactionForm = new TransactionForm(
      this.API_URI,
      this.basicModal,
      "transaction-form"
    );
    this.recentTransactionsTable = new RecentTransactionsTable(
      "recent-transactions"
    );
  }

  init() {
    this.basicModal.init();

    const transactionsPromise = new Promise((resolve, reject) => {
      fetch(`${this.API_URI}/transactions`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.authToken}`,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            reject(response);
          }
          return response.json();
        })
        .then((data) => {
          data.forEach((card) => {
            // Add the cardholder to the tally map
            if (!this.tally.has(card.cardholder)) {
              this.tally.set(card.cardholder, { transactionTotal: 0 });
            }

            card.transactions.forEach((transaction) => {
              // Add .purchaser property onto transaction object
              transaction.purchaser = card.cardholder;
              this.recentTransactions.push(transaction);

              // Add the transaction to the tally map
              this.tally.get(card.cardholder).transactionTotal +=
                transaction.amount;
            });
          });

          resolve();
        })
        .catch((err) => {
          reject();
          console.log(err);
        });
    });

    const merchantsPromise = new Promise((resolve, reject) => {
      fetch(`${this.API_URI}/merchants`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.authToken}`,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            reject(response);
          }
          return response.json();
        })
        .then((data) => {
          data.forEach((merchant) => {
            this.merchantList.push(merchant);
          });
          resolve();
        })
        .catch((err) => {
          reject();
          console.log(err);
        });
    });

    const cardsPromise = new Promise((resolve, reject) => {
      fetch(`${this.API_URI}/cards`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.authToken}`,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            reject(response);
          }
          return response.json();
        })
        .then((data) => {
          data.forEach((card) => {
            this.cardList.push(card);
          });
          resolve();
        })
        .catch((err) => {
          reject();
          console.log(err);
        });
    });

    Promise.all([transactionsPromise, merchantsPromise, cardsPromise])
      .then(() => {
        this.loadingMessage.classList.add("display-hidden");
        this.tallySection.render(this.tally);
        this.transactionForm.render(this.merchantList, this.cardList);
        this.recentTransactionsTable.render(this.recentTransactions);
      })
      .catch((err) => {
        if (err.status === 401) {
          window.location = `${window.origin}/auth`;
        } else {
          console.log(err);
        }
      });
  }
}

const app = new App();
app.init();
