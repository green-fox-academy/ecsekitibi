import { Plants } from "./plants";

'use strict'

export class Flower extends Plants {
  constructor(color: string = 'yellow') {
    super(color)
    this.absorbWater = 0.75;
  }
  needsWater(): boolean {
    if(this.currentWater < 5) {
      return true;
    }
  }

  getType(): string {
    return 'flower';
  }
}