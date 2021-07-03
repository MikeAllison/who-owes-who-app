class AuthHandler {
  constructor() {
    this.APP_URI = 'http://127.0.0.1:8080';
    //this.APP_URI = 'https://who-owes-who.5apps.com';
    this.AUTH_URI = 'http://localhost:3000/api';
    //this.AUTH_URI = 'https://who-owes-who.herokuapp.com/api';
    this.requestForm = document.getElementById('request-form');
    this.requestBtn = document.getElementById('request-btn');
    this.verifyForm = document.getElementById('verify-form');
    this.codeInput = document.getElementById('code-input');
    this.verifyBtn = document.getElementById('verify-btn');
    this.authModal = document.getElementById('auth-modal');

    this.requestBtn.addEventListener('click', e => {
      e.preventDefault();

      fetch(`${this.AUTH_URI}/auth`)
        .then(response => {
          this.requestForm.classList.add('display-hidden');
          this.verifyForm.classList.remove('display-hidden');

          this.verifyBtn.addEventListener('click', e => {
            e.preventDefault();

            if (!this.codeInput.value || isNaN(this.codeInput.value)) {
              $(this.authModal).modal('show');
              this.codeInput.value = null;
              return;
            }

            fetch(`${this.AUTH_URI}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ verificationCode: this.codeInput.value })
            })
              .then(response => response.json())
              .then(data => {
                window.sessionStorage.setItem('wow-token', data.authToken);
                window.location = `${this.APP_URI}`;
              })
              .catch(err => {
                $(this.authModal).modal('show');
                this.codeInput.value = null;
              });
          });
        })
        .catch(err => {
          $(this.authModal).modal('show'); // Request of verification code
          this.codeInput.value = null;
        });
    });
  }
}

new AuthHandler();
