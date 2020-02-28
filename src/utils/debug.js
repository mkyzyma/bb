let debugInfo = {};

const init = textElement => {
  debugInfo = textElement;
};

const message = msg => {
  debugInfo.text = msg;
};

export default {
  init,
  message
};
