import phaser from 'phaser';
import tiltSensor from './tilt';
import debug from '../utils/debug';

const tilt = [];
const pointerdown = [];

const addHandler = (src, handler) => {
  src.push(handler);
};

const tiltHandler = tiltData => {
  tilt.forEach(h => h(tiltData));
};

const pointerdownHandler = pointer => {
  console.error(pointerdown);
  pointerdown.forEach(h => h(pointer));
};
/**
 * @param {phaser.Input} sceneInput
 */
const start = sceneInput => {
  tiltSensor.start(tiltHandler);
  sceneInput.on('pointerdown', pointerdownHandler);
};

export default {
  tilt,
  pointerdown,
  start,
  addHandler
};
