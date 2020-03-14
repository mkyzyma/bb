import debug from '../utils/debug';

/**
 * @typedef {import('matter').Body} Body
 */

/**
 *
 *@param {Body} body
 *@param {number} power
 *@param {number} roll
 *@param {number} pitch
 */
const slide = (body, power, { roll, pitch }) => {
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
