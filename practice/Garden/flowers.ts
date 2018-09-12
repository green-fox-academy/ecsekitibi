import { Plant } from "./plants";

'use strict'

export class Flower extends Plant {
  color: string;
  waterAbsorb: number;
  waterAmount: number;

  constructor(color: string = "yellow") {
    super(color, 0, 0.75)

  }

  needsWater(): boolean {
    return this.currentAmountOfWater < 5;
  }

  useWater(): number {
    let waterUsage = super.waterAbsorb * super.currentAmountOfWater
    return waterUsage;
  }

}