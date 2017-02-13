'use strict';
window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };
  return {
    getRandomElement: getRandomElement,
    getRandomElementExcept: function (array, currentElement) {
      var newColor;
      while (!newColor || newColor === currentElement) {
        newColor = window.utils.getRandomElement(array);
      }
      return newColor;
    },
    isActivateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    }
  };
})();
