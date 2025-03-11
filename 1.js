ctx.prototype.__forEachKey = function (obj, callback) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    callback(keys[i]);
  }
};

ctx.prototype.__applyStyleState = function (styleState) {
  this.__forEachKey(styleState, (key) => {
    this[key] = styleState[key];
  });
};

ctx.prototype.__setDefaultStyles = function () {
  this.__forEachKey(STYLES, (key) => {
    this[key] = STYLES[key].canvas;
  });
};

ctx.prototype.__getStyleState = function () {
  const styleState = {};

  this.__forEachKey(STYLES, (key) => {
    styleState[key] = this[key];
  });

  return styleState;
};
