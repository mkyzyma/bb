import * as R from 'ramda';
import debug from '../utils/debug';

const { curry } = R;

const SLIDE_DIVIDER = 500;
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
const slide = curry((body, power, { roll, pitch }) => {
  body.force = {
    x: (roll * power) / SLIDE_DIVIDER,
    y: (-pitch * power) / SLIDE_DIVIDER
  };
});

/**
 * start to break body
 * @param {Body} body
 * @param {number} friction
 */
const setFriction = curry((body, friction) => {
  debug.message('setFriction');
  body.frictionAir = friction;
});

export default {
  slide,
  setFriction
};
