'use strict'

export abstract class Plant {
  color: string;
  currentAmountOfWater: number;
  waterAbsorb: number;

  constructor(color: string, currentAmountOfWater: number, waterAbsorb: number) {
    this.color = color;
    this.currentAmountOfWater = currentAmountOfWater;
    this.waterAbsorb = waterAbsorb;
  }

  abstract needsWater(): void;

  abstract useWater(): void;
}
