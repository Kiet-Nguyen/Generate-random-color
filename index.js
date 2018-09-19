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

const checkBrightness = (red, green, blue) => {
  return Math.floor(
    Math.sqrt(
      0.241 * Math.pow(red, 2) +
      0.691 * Math.pow(green, 2) +
      0.068 * Math.pow(blue, 2)
    )
  );
};

// Generate random hexadecimal color
const randomHexaNumberGenerator = () => {
  //return '#' + Math.floor(Math.random() * 16777215).toString(16);
  let hexColor;
  let red = 0;
  let green = 0;
  let blue = 0;
  let randomColor;

  radioBtn.value === 'red' ? (red = 255) : (red = getRandomInt());
  radioBtn.value === 'green' ? (green = 255) : (green = getRandomInt());
  radioBtn.value === 'blue' ? (blue = 255) : (blue = getRandomInt());

  let bightness = checkBrightness(red, green, blue);

  //store the random hex Color value after converting the rgb values to hexadecimal
  hexColor = ((1 << 24) + (red << 16) + (green << 8) + blue)
    .toString(16)
    .slice(1);

  randomColor = '#' + hexColor;

  return [randomColor, bightness];
};

const addColorItems = (items = 15) => {
  colorContainer.innerHTML = '';
  for (let index = 0; index < items; index++) {
    colorContainer.insertAdjacentHTML('afterbegin', markup);
    const itemBgColor = document.querySelector('.js-bg-color');
    const itemColorCode = document.querySelector('.js-color-value');
    const bgColor = randomHexaNumberGenerator();

    itemBgColor.style.backgroundColor = bgColor[0];
    itemColorCode.textContent = bgColor[0];
    console.log('bgColor[1]', `${bgColor[1]} ${index}`);

    if (bgColor[1] <= 168) {
      itemColorCode.style.color = '#c3becd';
    } else {
      itemColorCode.style.color = '#5c6878';
    }
  }
};
addColorItems();

document.addEventListener('keyup', e => {
  console.log('Key', e.keyCode);
  if (e.keyCode === 32) {
    addColorItems();
  }
});
