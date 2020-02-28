import phaser from 'phaser';

/**
 *
 *@param {phaser.Physics.Arcade.Body} body
 *@param {number} roll
 *@param {number} pitch
 */
const slide = (body, power, { roll, pitch }) => {
  body.setAcceleration(pitch * power, roll * power);
};

export default {
  slide
};
