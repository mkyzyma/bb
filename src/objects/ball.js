import phaser from 'phaser';
import physics from '../core/physics';
import debug from '../utils/debug';
/**
 *
 * @param {phaser.Scene} scene
 */
const create = scene => {
  const ball = scene.physics.add.image(10, 10, 'ball');
  ball.setCollideWorldBounds(true);
  ball.setBounce(0.5);
  ball.setVelocity(10, 10);
  const slidePowerDefault = 20;
  const slidePower = slidePowerDefault;

  let breakPushed = false;

  const slide = physics.slide(ball.body)(slidePower);

  return {
    sprite: ball,

    slide: tilt => {
      if (breakPushed) {
        tilt.roll /= 2;
        tilt.pitch /= 2;
      }
      slide(tilt);
    },

    breakPush: () => {
      breakPushed = true;
    },

    breakRelease: () => {
      breakPushed = false;
    }
  };
};

export default {
  create
};
