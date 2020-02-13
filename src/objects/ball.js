import config from '../config';
import phaser from 'phaser';

/**
 *
 * @param {phaser.Scene} scene
 */
export const create = scene => {
  const ball = scene.physics.add.image(
    config.scale.width / 2,
    config.scale.height / 2,
    'ball',
  );

  ball.setCollideWorldBounds(true);
  ball.setBounce(0.9);
  ball.body.velocity.y = -100;
  ball.body.velocity.x = -30;
  return ball;
  // scene.ball.setScale(3);
};
