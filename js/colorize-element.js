'use strict';
window.colorizeElement = (function (element, colors, property, cb) {
  element.addEventListener('click',function () {
    if (typeof cb === 'function'){
      cb (element, colors, property);
    }
  });
  element.addEventListener('keydown', function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      if (typeof cb === 'function'){
        cb (element, colors, property);
      }
    };
  });
});
