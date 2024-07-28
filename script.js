document.getElementById('register-btn').addEventListener('click', function() {
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.register-container').style.display = 'block';
});

document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Registration form submitted');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Login form submitted');
});
