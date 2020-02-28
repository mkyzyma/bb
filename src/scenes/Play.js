import numeral from 'numeral';
import phaser from 'phaser';
import Ball from '../objects/ball';
import controller from '../controller/game';
import physics from '../core/physics';

const { Scene } = phaser;
const fmtNum = num => {
  return numeral(num)
    .format('0.00')
    .padStart(6, ' ');
};

/**
 *
 * @param {Scene} scene
 */
const create = scene => {
  const ball = Ball.create(scene);

  controller.addHandler(controller.tilt, tiltData => {
    const o = tiltData;
    physics.slide(ball, 20, tiltData);
  });
  controller.start();
};

export default {
  key: 'Play',
  active: false,
  create() {
    create(this);
  }
};
