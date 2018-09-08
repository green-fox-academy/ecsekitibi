'use strict'

export class Plants {
  protected color: string;
  protected needsWater: number;
  protected absorbWater: number;
  protected waterAmount: number;

  constructor(color: string, needsWater: number, absorbWater: number, waterAmount: number) {
    this.color = color;
    this.needsWater = needsWater;
    this.absorbWater = absorbWater;
    this.waterAmount = waterAmount;
  }
  needWater(): boolean {
    if (this.waterAmount < this.needsWater)
        return true;
  }
  amountOfWater(water: number): void {
  this.waterAmount += water * this.absorbWater
  }
  getColor(): string {
  return this.color;
  }

}
