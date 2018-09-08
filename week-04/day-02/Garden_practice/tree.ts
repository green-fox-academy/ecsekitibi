import { Plants } from "./plants";

'use strict'

export class Tree extends Plants {
  constructor(color: string) {
    super(color)
    this.absorbWater = 0.4;
  }

  needsWater(): boolean {
    if(this.currentWater < 10) {
      return true;
    }
  }
  getType(): string {
    return 'tree';
  }
}