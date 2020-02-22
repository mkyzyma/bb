import phaser from 'phaser';

/**
 *
 * @param {phaser.Scene} scene
 */
const create = scene => {
  const ball = scene.physics.add.image(10, 10, 'ball');
  ball.setCollideWorldBounds(true);
  ball.setBounce(0.9);
  ball.body.velocity.y = -100;
  ball.body.velocity.x = -30;
  return ball;
  // scene.ball.setScale(3);
};

export default {
  create
};
