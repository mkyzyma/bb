import tiltSensor from './tilt';

const tilt = [];
const pointerdown = [];
const pointerup = [];

// const addHandler = (src, handler) => {
// src.push(handler);
// };

const tiltHandler = tiltData => {
  tilt.forEach(handler => handler(tiltData));
};

const pointerdownHandler = pointer => {
  pointerdown.forEach(handler => handler(pointer));
};
const pointerupHandler = pointer => {
  pointerup.forEach(handler => handler(pointer));
};
/**
 * @param {import('phaser').Scene} scene
 */
const create = scene => {
  tiltSensor.start(tiltHandler);
  scene.input.on('pointerdown', pointerdownHandler);
  scene.input.on('pointerup', pointerupHandler);
};

export default {
  tilt,
  pointerdown,
  pointerup,
  create
};
