import Phaser from 'phaser';
import scenes from './scenes';

/**
 * @typedef {GameObject} Phaser.GameObjects.GameObject
 */

export default {
  type: Phaser.AUTO,
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight
  },
  pixelArt: true,
  antialias: true,
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: 0 } // Top down game, so no gravity
    }
  },
  scene: scenes
};
