'use strict'

export abstract class Plant {
  private color: string;
  private currentAmountOfWater: number;
  private waterAbsorb: number;
  private needsWaterAmount: number

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

  abstract getType(): string;

  getColor(): string {
    return this.color;
  }

}
