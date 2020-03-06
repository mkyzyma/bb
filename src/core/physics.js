import phaser from 'phaser';
import debug from '../utils/debug';
/**
 *
 *@param {phaser.Physics.Arcade.Body} body
 *@param {number} roll
 *@param {number} pitch
 */
const slide = body => power => ({ roll, pitch }) => {
  body.setAcceleration(pitch * power, roll * power);
};

/**
 * Start to break body
 * @param {phaser.Physics.Arcade.Body} body
 * @param {number} friction
 */
const breakPush = body => dragPower => () => {
  debug.message(`breakPush ${dragPower}`);
};
/**
 * Start to break body
 * @param {phaser.Physics.Arcade.Body} body
 */
const breakRelease = body => {
  body.setFriction(0);
};

export default {
  slide,
  breakPush,
  breakRelease
};
