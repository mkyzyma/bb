import Phaser from 'phaser';
import scenes from './scenes';

export default {
  type: Phaser.AUTO,
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    resolution: 1,
    width: 900,
    height: 480,
  },
  antialias: true,
  backgroundColor: '#9adaea',
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: 0 } // Top down game, so no gravity
    }
  },
  scene: scenes
};
