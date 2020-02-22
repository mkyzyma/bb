let debugInfo = {};

const init = (textElement) => {
  debugInfo = textElement;
}

const message= (msg) => {
  debugInfo.text += `\n${msg}`;
} 

export default {
  init,
  message,
}
