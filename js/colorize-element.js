'use strict';
window.colorizeElement = function (element, colors, property) {
  var currentColor = element.style[property];
  element.addEventListener('click', function () {
    element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
  });
  var ENTER_KEY_CODE = 13;
  var isActivateEvent = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };

  element.addEventListener('keydown', function (evt) {
    if (isActivateEvent(evt)) {
      element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
    }
  })
}
