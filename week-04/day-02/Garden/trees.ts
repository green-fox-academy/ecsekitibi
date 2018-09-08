'use strict'
import { Garden } from "./garden";
import { Plants } from "./plants";
export class Trees extends Plants {
    
    constructor(color: string, needsWater: number = 10, absorbWater: number = 0.4, waterAmount: number = 3) {
        super(color, needsWater, absorbWater, waterAmount)
    }
}