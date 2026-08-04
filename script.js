const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    status.textContent = 'Please enter a valid email address.';
    status.style.color = '#ff6b6b';
    emailInput.focus();
    return;
  }

  status.textContent = "You're on the list. Welcome to the pack.";
  status.style.color = '#f6ff00';
  form.reset();
});
