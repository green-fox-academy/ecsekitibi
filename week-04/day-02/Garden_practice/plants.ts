'use strict'

export abstract class Plants {
  protected color: string;
  protected currentWater: number;
  protected absorbWater: number;
  

  constructor(color: string) {
    this.color = color;
    this.currentWater = 0;
    this.absorbWater = 1;
  }

  abstract needsWater(): void 

  abstract getType(): void
  
  beWatered(water: number): void {
    this.currentWater += water * this.absorbWater;
  }

  getColor(): string {
    return this.color;
  }
}