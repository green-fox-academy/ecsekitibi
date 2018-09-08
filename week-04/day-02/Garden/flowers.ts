'use strict'
import { Garden } from "./garden";
import { Plants } from "./plants";
export class Flowers extends Plants {

    constructor (color: string, needsWater: number = 10, absorbWater: number = 0.75, waterAmount: number = 3) {
        super (color, needsWater, absorbWater, waterAmount);
    }
}
