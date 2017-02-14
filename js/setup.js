'use strict';
// При нажатии на элемент .setup-open нужно
// убрать класс invisible у элемента .setup
// var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');

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

setupOpen.addEventListener('click', function (evt) {
  window.enableSetup(null);
  handleBtnClick(evt);
});
var focusSetupButton = function () {
  setupOpen.focus();
};
setupOpen.addEventListener('keydown', function (evt) {
  if (window.utils.isActivateEvent(evt)) {
    window.enableSetup(focusSetupButton);
    handleBtnKeyPress(evt);
  }
});

// При нажатии на крестик внутри оверлея .setup-close
// добавить класс invisible элементу .setup
// Валидация ввода имени персонажа средствами HTML5
var wizardName = document.querySelector('.setup-user-name');

wizardName.required = true;
wizardName.maxLength = 10;

// При нажатии на волшебника меняется цвет его
// одежды на случайный

var wizardCoat = document.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var onColorizeElement = function (element, colors, property) {
  var currentColor = element.style[property];
  element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
};
window.colorizeElement(wizardCoat, wizardCoatColors, 'fill', onColorizeElement);
// При нажатии на блок #wizard-eyes  цвет его глаз
// меняется  на следующий в массиве wizardEyesColors

var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
window.colorizeElement(wizardEyes, wizardEyesColors, 'fill', onColorizeElement);

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
window.colorizeElement(setupFireball, fireballColors, 'background', onColorizeElement);
