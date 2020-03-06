import numeral from 'numeral';
import phaser from 'phaser';
import Ball from '../objects/ball';
import controller from '../controller/game';
import physics from '../core/physics';
import debug from '../utils/debug';

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
  debug.init(scene);
  debug.message('Debugger ready');
  const ball = Ball.create(scene);

  controller.addHandler(controller.tilt, tiltData => {
    debug.message('slide');
    ball.slide(tiltData);
  });

  scene.input.on('pointerdown', () => {
    ball.breakPush();
  });

  scene.input.on('pointerup', () => {
    ball.breakRelease();
  });

  controller.start(scene.input);
};

export default {
  key: 'Play',
  active: false,
  create() {
    create(this);
  }
};
