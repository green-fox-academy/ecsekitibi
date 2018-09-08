import { Tree } from "./tree";
import { Flower } from "./flower";
import { Plants } from "./plants";

/*
The Garden Application
The task is to create a garden application, so in your main method you should create 
a garden with flowers and trees. The program should demonstrate an example garden with 
two flowers (yellow and blue) and two trees (purple and orange). 
In the example after creating them you should show the user, how the garden looks like. 
After that the program should water the garden twice, first with the amount of 40 then with 70. 
And after every watering the user should see the state of the garden as you can see in the output.

The output should look like this:

The yellow Flower needs water
The blue Flower needs water
The purple Tree needs water
The orange Tree needs water

Watering with 40
The yellow Flower doesnt need water
The blue Flower doesnt need water
The purple Tree needs water
The orange Tree needs water

Watering with 70
The yellow Flower doesnt need water
The blue Flower doesnt need water
The purple Tree doesnt need water
The orange Tree doesnt need water

Information on the elements

The Garden
is able to hold unlimited amount of flowers or trees
when watering it should only water those what needs water with equally divided amount amongst them
eg. watering with 40 and 4 of them need water then each gets watered with 10.
The Flower
needs water if its current water amount is less then 5
when watering it the flower can only absorb the 75% of the water
eg. watering with 10 the flower's amount of water should only increase with 7.5
The Tree
needs water if its current water amount is less then 10
when watering it the tree can only absorb the 40% of the water
eg. watering with 10 the tree's amount of water should only increase with 4
*/

'use strict'

export class Garden {
  novenyek: Plants[]

  constructor() {
    this.novenyek = [];
  }

  addPlant(inputPlant: Plants) {
    this.novenyek.push(inputPlant);

  }

  watering(waterAmount: number) {
    let amount: number = 0;
    this.novenyek.forEach(item => {
      if (item.needsWater()) {
        amount++;
      }
    })
    this.novenyek.forEach(item => {
      if (item.needsWater()) {
        item.beWatered(waterAmount / amount);
      } 
    }); 
    console.log(`Watering with ${waterAmount}.`);
    this.getStatus();
  } 
  

  getStatus() {
    this.novenyek.forEach(item => {
      if(item.needsWater()) {
        console.log(`The ${item.getColor()} ${item.getType()} needs water.`);
      } else {
        console.log(`The ${item.getColor()} ${item.getType()} doesnt need water.`);
      }
    })
  }
}
