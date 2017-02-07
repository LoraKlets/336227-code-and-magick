'use strict';
window.utils = {
  getRandomElement: function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  },
  getRandomElementExcept: function (array, currentElement) {
    var newColor;
    while (!newColor || newColor === currentElement) {
      newColor = window.utils.getRandomElement(array);
    }
    return newColor;
  }
};
