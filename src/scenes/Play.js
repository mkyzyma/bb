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

  scene.matter.add.rectangle(0, 0, scene.cameras.main.width, 10, { isStatic: true });
  scene.matter.add.rectangle(0, 0, 10, scene.cameras.main.height, { isStatic: true });

  controller.create(scene);

  controller.tilt.push(ball.slide);

  controller.pointerdown.push(ball.breakPush);
  controller.pointerup.push(ball.breakRelease);
};

export default {
  key: 'Play',
  active: false,
  create() {
    create(this);
  }
};
