class AuthHandler {
  constructor() {
    this.AUTH_URI = 'http://localhost:3000/auth';
    this.requestForm = document.getElementById('request-form');
    this.requestBtn = document.getElementById('request-btn');
    this.verifyForm = document.getElementById('verify-form');
    this.codeInput = document.getElementById('code-input');
    this.verifyBtn = document.getElementById('verify-btn');

    this.requestBtn.addEventListener('click', e => {
      e.preventDefault();

      fetch(`${this.AUTH_URI}`)
        .then(response => {
          this.requestForm.classList.add('hidden');
          this.verifyForm.classList.remove('hidden');

          this.verifyBtn.addEventListener('click', e => {
            e.preventDefault();

            if (this.codeInput.value && !isNaN(this.codeInput.value)) {
              fetch(`${this.AUTH_URI}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ verificationCode: this.codeInput.value })
              })
                .then(response => response.json())
                .then(data => {
                  window.sessionStorage.setItem('wowtoken', data.token);
                })
                .catch(err => {
                  console.log('verification failed');
                });
            }
          });
        })
        .catch(err => {
          console.log(err); // Request of verification code
        });
    });
  }
}

new AuthHandler();
