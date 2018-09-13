'use strict'

export abstract class Plant {
  color: string;
  currentAmountOfWater: number;
  waterAbsorb: number;
  needsWaterAmount: number

  constructor(color: string, waterAbsorb: number, needsWaterAmount: number) {
    this.color = color;
    this.currentAmountOfWater = 0;
    this.waterAbsorb = waterAbsorb;
    this.needsWaterAmount = needsWaterAmount;
  }

  needsWater(): boolean {
    return this.currentAmountOfWater < this.needsWaterAmount;
  }

  waterUsage(waterAmount: number): number {
    this.currentAmountOfWater += waterAmount * this.waterAbsorb;
    return this.currentAmountOfWater;
  }

}
