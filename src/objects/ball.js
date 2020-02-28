import phaser from 'phaser';

/**
 *
 * @param {phaser.Scene} scene
 */
const create = scene => {
  const ball = scene.physics.add.image(10, 10, 'ball');
  ball.setCollideWorldBounds(true);
  ball.setBounce(0.5);

  return ball;
  // scene.ball.setScale(3);
};

export default {
  create
};
