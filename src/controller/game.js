import tiltSensor from './tilt';

const tilt = [];

const addHandler = (src, handler) => {
  src.push(handler);
};

const tiltHandler = tiltData => {
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
