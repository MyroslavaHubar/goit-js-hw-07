const categoriesList = document.querySelectorAll('li.item');
console.log(`Number of categories ${categoriesList.length}`);
const categoriesInfo = categoriesList.forEach(element => {
  const categoriesName = element.querySelector('h2').textContent;
  console.log(`Category: ${categoriesName}`);
  const categoriesElements = element.querySelectorAll('li').length;
  console.log(`Elements: ${categoriesElements}`);
});
