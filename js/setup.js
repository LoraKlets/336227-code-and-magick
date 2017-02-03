'use strict';
// При нажатии на элемент .setup-open нужно
// убрать класс invisible у элемента .setup
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};
var setupKeydownHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
};
var handleBtnKeyPress = function (evt) {
// Check to see if space or enter were pressed
  if (evt.keyCode === 32 || evt.keyCode === 13) {
 // Prevent the default action to stop scrolling when space is pressed
    evt.preventDefault();
    toggleBtn(evt.target);
  }
};

var handleBtnClick = function (evt) {
  toggleBtn(evt.target);
};

function toggleBtn(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute('aria-pressed') === 'true');
  // Change aria-pressed to the opposite state
  element.setAttribute('aria-pressed', !pressed);
}



var showSetupElement = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};
var hideSetupElement = function () {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};

setupOpen.addEventListener('click', function (evt) {
  showSetupElement();
  handleBtnClick(evt);
});
setupOpen.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    showSetupElement();
    handleBtnKeyPress(evt);
  }
});

// При нажатии на крестик внутри оверлея .setup-close
// добавить класс invisible элементу .setup

setupClose.addEventListener('click', function (evt) {
  hideSetupElement();
  handleBtnClick(evt);
});
setupClose.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    hideSetupElement();
    handleBtnKeyPress(evt);
  }
});
// Валидация ввода имени персонажа средствами HTML5
var wizardName = document.querySelector('.setup-user-name');

wizardName.required = true;
wizardName.maxLength = 10;

// При нажатии на волшебника меняется цвет его
// одежды на случайный
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];


wizardCoat.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorNumber];
});

// При нажатии на блок #wizard-eyes  цвет его глаз
// меняется  на следующий в массиве wizardEyesColors

var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var colorNumberY = 0;
wizardEyes.addEventListener('click', function () {
  colorNumberY++;
  if (colorNumberY === wizardEyesColors.length) { colorNumberY = 0; }
  wizardEyes.style.fill = wizardEyesColors[colorNumberY];
});

// При нажатии на блок .setup-fireball-wrap меняется цвет
// файербола на следующий в последовательности цветов

var setupFireball = document.querySelector('.setup-fireball-wrap');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var colorFireballNumber = 0;
setupFireball.addEventListener('click', function () {
  colorFireballNumber++;
  if (colorFireballNumber === fireballColors.length) {
    colorFireballNumber = 0; }
  setupFireball.style.background = fireballColors[colorFireballNumber];
});
