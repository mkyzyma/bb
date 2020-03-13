import Ball from '../objects/ball';
import controller from '../controller/game';
import debug from '../utils/debug';

/**
 * Create "Play" scene
 * @param {import('phaser').Scene} scene
 */
const create = scene => {
  debug.init(scene);
  debug.message('Debugger ready');
  const ball = Ball.create(scene);

  controller.addHandler(controller.tilt, tiltData => {
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
