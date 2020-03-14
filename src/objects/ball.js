import * as R from 'ramda';
import physics from '../core/physics';

const { curry } = R;
/**
 * @param {import('phaser').Scene} scene
 */
const create = scene => {
  const props = {
    restitution: 0.5,
    friction: 0.01,
    frictionAir: 0,
    frictionStatic: 0,
    density: 0.01
  };
  const skills = {
    breakPower: 5
  };
  const ball = scene.matter.add.sprite(400, 200, 'ball');
  ball.setCircle(ball.width / 2, props);

  const slidePowerDefault = 1;
  const slidePower = slidePowerDefault;

  const slide = curry(physics.slide)(ball.body)(slidePower);
  const setFriction = curry(physics.setFriction)(ball.body);

  return {
    sprite: ball,
    slide,
    breakPush: () => setFriction(0.1 * skills.breakPower),
    breakRelease: () => setFriction(props.frictionAir)
  };
};

export default {
  create
};
