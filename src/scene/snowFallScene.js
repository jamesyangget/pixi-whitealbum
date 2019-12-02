import { Container } from 'pixi.js';
import SnowFallBackground from '../snow/snowFall';

/**
 * 雪花粒子场景
 */
class SnowFallScene {
  constructor(width, height, screenScaleRito) {
    this.rootContainer = new Container();
    this.width = width;
    this.height = height;
    this.screenScaleRito = screenScaleRito;

    this.maxDist = 100;
    this.amount = 100;

    this.render();
  }

  render() {
    const { rootContainer, screenScaleRito, width, height, amount, maxDist } = this;
    rootContainer.scale.set(1 / screenScaleRito, 1 / screenScaleRito);
    this.snowFallBackground = new SnowFallBackground({
      width,
      height,
      maxDist,
      parent: rootContainer,
      amount
    });
  }

  tick() {
    this.snowFallBackground.tick();
  }
}

export default SnowFallScene;