import Ball from '../assets/ball.png';

const preload = scene => {
  scene.load.image('ball', Ball);
};

const create = scene => {
  scene.scene.start('Play');
};

export default {
  key: 'Preload',
  active: true,
  create: function() {
    create(this);
  },
  preload: function() {
    preload(this);
  },
};
