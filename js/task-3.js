const nameInputElem = document.querySelector('#name-input');
// console.log(nameInputElem);
const spanInputElem = document.querySelector('#name-output');
// console.log(spanInputElem);

nameInputElem.addEventListener('input', event => {
  const valueElem = event.currentTarget.value.trim();
  spanInputElem.textContent = valueElem === '' ? 'Anonymous' : valueElem;
});
