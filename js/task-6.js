function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector('input');
// console.log(inputElem);
const createBtnElem = document.querySelector('[data-create]');
// console.log(createBtnElem);
const destroyBtnElem = document.querySelector('[data-destroy]');
// console.log(destroyBtnElem);
const boxesContainerElem = document.querySelector('#boxes');
// console.log(boxesElem);

createBtnElem.addEventListener('click', event => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Enter a number between 1-100');
  }
});

function createBoxes(amount) {
  let boxesContent = '';

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    boxesContent += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  }
  boxesContainerElem.innerHTML = boxesContent;
}

function destroyBoxes() {
  boxesContainerElem.innerHTML = '';
}

destroyBtnElem.addEventListener('click', destroyBoxes);
