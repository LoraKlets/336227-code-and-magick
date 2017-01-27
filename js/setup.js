// При нажатии на элемент .setup-open нужно
// убрать класс invisible у элемента .setup
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

setupOpen.addEventListener('click',function() {
  setup.classList.remove('invisible');
})

// При нажатии на крестик внутри оверлея
// .setup-close добавить класс invisible
// элементу .setup
setupClose.addEventListener('click',function() {
  setup.classList.add('invisible');
})
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




wizardCoat.addEventListener('click', function() {
    var colorNumber = Math.floor(Math.random() * wizardCoatColors.length);
    wizardCoat.style.fill = wizardCoatColors[colorNumber];
})

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
wizardEyes.addEventListener('click', function() {
    colorNumberY ++;
    if (colorNumberY == wizardEyesColors.length) {colorNumberY = 0};
    wizardEyes.style.fill = wizardEyesColors[colorNumberY];
})

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
  setupFireball.addEventListener('click', function() {
  colorFireballNumber++;
  if (colorFireballNumber == fireballColors.length) {colorFireballNumber = 0};
  setupFireball.style.background = fireballColors[colorFireballNumber];
})
