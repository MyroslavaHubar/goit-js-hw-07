function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector('.change-color');
// console.log(btnElem);
const btnSpanElem = document.querySelector('.color');
// console.log(btnSpanElem);

btnElem.addEventListener('click', () => {
  const bodyColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyColor;
  btnSpanElem.textContent = bodyColor;
});
