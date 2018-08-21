/*
Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal
*/

import { Animal } from "./animal";

class Farm {
    private animals: Animal[];
    private freeSlots: number;

    constructor() {
        this.animals = [];
        this.freeSlots = 10;
    }


    breed() {
        if (this.freeSlots > 0) {
            let myAnimal: Animal = new Animal ();
            this.animals.push(myAnimal);
            this.freeSlots--;
        }
    }

    slaughter() {
        if (this.animals.length !== 0) {
            let index: number = 0;
            for (let i: number = 0; i < this.animals.length; i++) {
                let leastHungry: Animal = this.animals[index];
                let currentAnimal: Animal = this.animals[i];
                if (currentAnimal.getHungry() < leastHungry.getHungry()) {
                    index = i;
                }
            }
            this.animals.splice(index, 1);
            this.freeSlots++;
        }
    }

}