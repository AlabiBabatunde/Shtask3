// Get the form element
const form = document.querySelector('form');

// Get the input elements
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

// Get the error message elements
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Reset the error messages
  nameError.innerHTML = '';
  emailError.innerHTML = '';

  // Validate the name input
  if (nameInput.value.trim() === '') {
    nameError.innerHTML = 'Name is required';
  }

  // Validate the email input
  if (emailInput.value.trim() === '') {
    emailError.innerHTML = 'Email is required';
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.innerHTML = 'Email is invalid';
  }

  // If there are no errors, submit the form
  if (nameError.innerHTML === '' && emailError.innerHTML === '') {
    form.submit();
    alert('Form submitted successfully!');
  }
});

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
