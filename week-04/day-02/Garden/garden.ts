'use strict'
import { Flowers } from "./flowers";
import { Trees } from "./trees";

export class Garden {
    private trees: Trees[];
    private flowers: Flowers[];

    constructor() {
        this.trees = [];
        this.flowers = [];
    }
    addTrees(tree: Trees): void {
        this.trees.push(tree)
    }

    addFlowers(flower: Flowers): void {
        this.flowers.push(flower)
    }

    watering(waterAmount: number): void {
        let count: number = 0;
        this.flowers.forEach(item => { if (item.needWater) { count++ } });
        this.trees.forEach(item => { if (item.needWater) { count++ } });
        this.flowers.forEach(item => { if (item.needWater) { item.amountOfWater(waterAmount / count) } });
        this.trees.forEach(item => { if (item.needWater) { item.amountOfWater(waterAmount / count) } });
        console.log(`Watering with ${waterAmount}`);
    }

    print(): void {
        this.flowers.forEach(item => {
            if (item.needWater()) { console.log(`The ${item.getColor} Flower needs water.`) }
            else {
                console.log(`The ${item.getColor} Flower doesnt need water.`);
            }
        });
        this.trees.forEach(item => {
            if (item.needWater()) { console.log(`The ${item.getColor} Tree needs water.`) }
            else {
                console.log(`The ${item.getColor} Tree doesnt need water.`);
            }
        });
    }
}


