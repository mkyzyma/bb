import phaser from 'phaser';

let debug = {};
/**
 * initialize debug module
 * @param {phaser.Scene} scene
 */
const init = scene => {
  debug = scene.add.text(0, 0);
};

const message = msg => {
  debug.text = msg;
};

export default {
  init,
  message
};
