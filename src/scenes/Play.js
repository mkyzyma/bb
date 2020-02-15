import Ball from '../objects/ball';

const create = scene => {
  Ball.create(scene);

  const motion = scene.add.text(10, 10, '');
  const orient = scene.add.text(10, 30, '');

  window.addEventListener('devicemotion', event => {
    const r = event.acceleration;
    motion.text = `Rotataion: a=${r.x}, b=${r.y}, g=${r.z}`;
  });
  window.addEventListener('deviceorientation', event => {
    const r = event;
    orient.text = `Rotataion: a=${r.alpha}, b=${r.beta}, g=${r.gamma}`;
  });
};

export default {
  key: 'Play',
  active: false,
  create() {
    create(this);
  }
};
