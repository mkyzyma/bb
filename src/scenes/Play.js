import numeral from 'numeral';
import phaser from 'phaser';
import Ball from '../objects/ball';
import controller from '../controller/game';
import debug from '../utils/debug';

const { Scene } = phaser;
const fmtNum = num => {
  return numeral(num)
    .format('0.00')
    .padStart(6, ' ');
};

/**
 *
 * @param {Scene} scene
 */
const create = scene => {
  Ball.create(scene);
  // const motion = scene.add.text(10, 10, '');
  const orient = scene.add.text(10, 10, '');

  debug.init(orient);
  debug.message('Hello, debug!!!');

  controller.addHandler(controller.tilt, tiltData => {
    const o = tiltData;
    orient.text = `Orientation\n\tp: ${fmtNum(o.pitch)}\n\tr: ${fmtNum(o.roll)}`;
  });
  controller.start();
  // window.addEventListener(
  // 'devicemotion',
  // event => {
  // const a = event.accelerationIncludingGravity;
  // motion.text = `Acceleration \n\tx: ${fmtNum(a.x)}\n\ty: ${fmtNum(a.y)}\n\tz: ${fmtNum(
  // a.z
  // )}\n\tint: ${fmtNum(event.interval)}`;
  //
  // const o = getRotationFromAccel(a.x, a.y, a.z);
  // orient.text = `Orientation\n\tp: ${fmtNum(o.pitch)}\n\tr: ${fmtNum(o.roll)}`;
  // },
  // true
  // );
};

export default {
  key: 'Play',
  active: false,
  create() {
    create(this);
  }
};
