import { Plant } from "./plants";

'use strict'

export class Tree extends Plant {

  constructor(color: string = "purple") {
    super(color, 0, 0.4)
  }

  needsWater(): boolean {
    if (this.currentAmountOfWater < 10) {
      return true;
    } else {
      return false;
    }
  }

  useWater(waterAmount: number): number {
    return super.currentAmountOfWater = super.waterAbsorb * waterAmount

  }
}