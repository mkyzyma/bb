import Phaser from 'phaser';
import config from './config';
import './styles/index.scss';

function processEvent(event) {
  console.log(event);
}
window.addEventListener('devicemotion', processEvent);

new Phaser.Game(config);
