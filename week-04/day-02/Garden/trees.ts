'use strict'
import { Garden } from "./garden";
export class Trees {
    private color: string;
    private needsWater: number;
    private absorbWater: number;
    private waterAmount: number;

    constructor(color: string, needsWater: number = 5, absorbWater: number = 0.4, waterAmount: number = 3) {
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