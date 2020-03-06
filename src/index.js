import Phaser from 'phaser';
import config from './config';
import './styles/index.scss';
import setup from './core/setup'
setup()
new Phaser.Game(config);
