import {Game} from 'phaser';
import { BootScene } from "./scenes/boot";


const config: GameConfig = {
    title: "Flappy Bird",
    url: "https://github.com/digitsensitive/phaser3-typescript",
    version: "1.0",
    width: window.outerWidth,
    height: 600,
    zoom: 1.2,
    type: Phaser.AUTO,
    parent: "game",
    scene: [BootScene],
    input: {
      keyboard: true,
      mouse: false,
      touch: false,
      gamepad: false
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    backgroundColor: "#8abbc1",
}

new Game (config);
