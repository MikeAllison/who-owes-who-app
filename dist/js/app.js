class App {
  static transactions = [
    { id: 1, merchant: 'one', amount: 11.11 },
    { id: 2, merchant: 'two', amount: 22.22 }
  ];

  static renderHook = document.getElementById('app');

  static init() {}
}

App.init();
