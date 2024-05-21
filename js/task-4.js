const formElem = document.querySelector('.login-form');
// console.log(formElem);
formElem.addEventListener('submit', event => {
  event.preventDefault();

  const data = {
    email: formElem.elements.email.value.trim(),
    password: formElem.elements.password.value.trim(),
  };

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(data);
    formElem.reset();
  }
});
