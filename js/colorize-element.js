'use strict';
window.colorizeElement = (function (element, colors, property) {
  var currentColor = element.style[property];
  element.addEventListener('click', function () {
    element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
  });

  element.addEventListener('keydown', function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
    }
  });
});
