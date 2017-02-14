'use strict';
window.enableSetup = (function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var onSetupClose;
  var ESCAPE_KEY_CODE = 27;

  var setupKeydownHandler = function (evt) {
    if (evt.keyCode === ESCAPE_KEY_CODE) {
      setup.classList.add('invisible');
    }
  };
  var openSetup = function () {
    setup.classList.remove('invisible');
    document.addEventListener('keydown', setupKeydownHandler);
  };
  var closeSetup = function () {
    setup.classList.add('invisible');
    document.removeEventListener('keydown', setupKeydownHandler);

    if (typeof onSetupClose === 'function') {
        onSetupClose();
    }
  };
  var onKeyDown = function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      closeSetup();
    }
  };
  return function (cb) {
    openSetup();
    setupClose.addEventListener('keydown', onKeyDown);
    setupClose.addEventListener('click', closeSetup);
    onSetupClose = cb;
  }
})();
