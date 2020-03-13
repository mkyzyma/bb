import debug from '../utils/debug';

/**
 * @typedef {Phaser.GameObjects.GameObject} GameObject
 */

/**
 *
 *@param {GameObject} o
 *@param {number} power
 *@param {number} roll
 *@param {number} pitch
 */
const slide = (o, power, { roll, pitch }) => {
  const { body } = o;
  body.force = { x: 0, y: 0 };
  body.force = {
    x: (roll * power) / 2000,
    y: (-pitch * power) / 2000
  };
};

/**
 * start to break body
 * @param {GameObject} o
 * @param {number} friction
 */
const setFriction = (o, friction) => {
  debug.message('setFriction');
  o.body.frictionAir = friction;
};

export default {
  slide,
  setFriction
};
