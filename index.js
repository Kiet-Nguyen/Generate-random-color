const colorContainer = document.querySelector('.js-add-items');
const radioBtn = document.myForm.color;

const markup = `
  <div class="js-bg-color color-item">
    <span class="js-color-value color-value"></span>
  </div>
`;

const getRandomInt = () => {
  return Math.floor(Math.random() * 255) + 1;
};

// Generate random hexadecimal color
const randomHexaNumberGenerator = () => {
  //return '#' + Math.floor(Math.random() * 16777215).toString(16);
  let hexColor;
  let red = 0;
  let green = 0;
  let blue = 0;
  const randomColor = '#';

  radioBtn.value === 'red' ? (red = 255) : (red = getRandomInt());
  radioBtn.value === 'green' ? (green = 255) : (green = getRandomInt());
  radioBtn.value === 'blue' ? (blue = 255) : (blue = getRandomInt());

  //store the random hex Color value after converting the rgb values to hexadecimal
  hexColor = ((1 << 24) + (red << 16) + (green << 8) + blue)
    .toString(16)
    .slice(1);

  return randomColor + hexColor;
};

const addColorItems = (items = 5) => {
  colorContainer.innerHTML = '';
  for (let index = 0; index < items; index++) {
    colorContainer.insertAdjacentHTML('afterbegin', markup);
    const itemBgColor = document.querySelector('.js-bg-color');
    const itemColorCode = document.querySelector('.js-color-value');
    const bgColor = randomHexaNumberGenerator();

    itemBgColor.style.backgroundColor = bgColor;
    itemColorCode.textContent = bgColor;
  }
};
addColorItems();

document.addEventListener('keyup', e => {
  console.log('Key', e.keyCode);
  if (e.keyCode === 32) {
    addColorItems();
  }
});
