const inputElem = document.querySelector('input');
// console.log(inputElem);
const createBtnElem = document.querySelector('[data-create]');
// console.log(createBtnElem);
const destroyBtnElem = document.querySelector('[data-destroy]');
// console.log(destroyBtnElem);
const boxesContainerElem = document.querySelector('#boxes');
// console.log(boxesElem);

createBtnElem.addEventListener('click', () => createBoxes(inputElem.value));
destroyBtnElem.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesContainerElem.innerHTML = '';
}
function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  let boxesContent = '';
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      boxesContent += `<div style ="background:${getRandomHexColor()}; width: ${size}px;height:${size}px;"></div>`;
      size += 10;
    }
  } else alert('Enter number between 1-100');
  boxesContainerElem.innerHTML = boxesContent;
  inputElem.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
