const formElem = document.querySelector('.login-form');
// console.log(formElem);
formElem.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const dataForm = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };

  if (dataForm.email === '' || dataForm.password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(dataForm);
    form.reset();
  }
});
