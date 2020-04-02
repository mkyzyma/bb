import * as R from 'ramda';
// import debug from '../utils/debug';

const { pipe, curry } = R;

const RAD_TO_DEG = 180 / Math.PI;

const roll = curry((x, y, z) => {
  const sign = z > 0 ? 1 : -1;
  const miu = 0.001;
  return Math.atan2(y, sign * Math.sqrt(z ** 2 + miu * x ** 2)) * RAD_TO_DEG;
});

const pitch = curry((x, y, z) => {
  return -Math.atan2(x, Math.sqrt(y ** 2 + z ** 2)) * RAD_TO_DEG;
});

const rotationFromAcceleration = ({ x, y, z }) => {
  return {
    roll: roll(x, y, z),
    pitch: pitch(x, y, z)
  };
};

const calculate = event => {
  const a = event.accelerationIncludingGravity;
  return rotationFromAcceleration(a);
};

const calibrate = curry((zero, value) => {
  return {
    roll: value.roll - zero.roll,
    pitch: value.pitch - zero.pitch
  };
});

const addListener = (handler, options = null) =>
  window.addEventListener('devicemotion', handler, options);
const addListenerOnce = handler => window.addEventListener('devicemotion', handler, { once: true });

const rotate = curry((handle, zero) => pipe(calculate, calibrate(zero), handle));

const onCalibrate = curry((createHandle, event) =>
  pipe(calculate, createHandle, addListener)(event)
);

const start = pipe(rotate, onCalibrate, addListenerOnce);
// const start = handler => addListenerOnce(onCalibrate(rotate(handler)));

export default {
  start
};
