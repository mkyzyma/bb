import debug from '../utils/debug';

const RAD_TO_DEG = 180 / Math.PI;
const getRotationFromAccel = ({ x, y, z }) => {
  /* Reference: http://stackoverflow.com/questions/3755059/3d-accelerometer-calculate-the-orientation#answer-30195572 */
  const sign = z > 0 ? 1 : -1;
  const miu = 0.001;
  return {
    roll: Math.atan2(y, sign * Math.sqrt(z ** 2 + miu * x ** 2)) * RAD_TO_DEG,
    pitch: -Math.atan2(x, Math.sqrt(y ** 2 + z ** 2)) * RAD_TO_DEG
  };
};

const start = handler => {
  debug.message('Controller start');

  let calibrated = false;

  let zero = {
    roll: 0,
    pitch: 0
  };

  window.addEventListener('devicemotion', event => {
    const a = event.accelerationIncludingGravity;

    const r = getRotationFromAccel(a);

    if (!calibrated) {
      zero = {
        roll: r.roll,
        pitch: r.pitch
      };

      calibrated = true;
    }

    const cr = {
      roll: r.roll - zero.roll,
      pitch: r.pitch - zero.pitch
    };
    handler(cr);
  });
};

export default {
  start
};
