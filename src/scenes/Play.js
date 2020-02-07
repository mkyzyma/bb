import config from '../config';

const create = scene => {
  scene.ball = scene.physics.add.image(
    config.scale.width / 2,
    config.scale.height / 2,
    'ball',
  );
  scene.ball.setCollideWorldBounds(true);
  scene.ball.setBounce(0.9);
  scene.ball.setScale(3);
};

export default {
  key: 'Play',
  active: false,
  create: function() {
    create(this);
  },
};
