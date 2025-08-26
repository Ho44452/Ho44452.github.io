// Set your numeric password here
const CORRECT_PASSWORD = "220923";

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('renewed-form');
  const input = document.getElementById('renewed-input');
  const error = document.getElementById('renewed-error');
  if (form && input && error) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (input.value === CORRECT_PASSWORD) {
        error.style.display = 'none';
        window.location.href = 'home.html';
      } else {
        error.style.display = 'block';
        error.textContent = 'ผิดๆๆๆๆๆๆ!';
        input.value = '';
        input.focus();
      }
    });
  }
});
