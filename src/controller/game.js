import tiltSensor from './tilt';
// import debug from '../utils/debug';

const tilt = [];

const addHandler = (src, handler) => {
  src.push(handler);
};

const tiltHandler = tiltData => {
  // debug.message(tiltData);
  tilt.forEach(h => h(tiltData));
};
const start = () => {
  tiltSensor.start(tiltHandler);
};

export default {
  tilt,
  start,
  addHandler
};
