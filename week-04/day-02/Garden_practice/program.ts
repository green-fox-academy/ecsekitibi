import { Tree } from "./tree";
import { Flower } from "./flower";
import { Garden } from "./garden";

let tree1: Tree = new Tree('blue');
let tree2: Tree = new Tree('red');
let flower1: Flower = new Flower;
let flower2: Flower = new Flower('pink');

//console.log(flower1);
//console.log(flower2);

let myGarden: Garden = new Garden();

//console.log(myGarden);

myGarden.addPlant(flower1);
myGarden.addPlant(flower2);
myGarden.addPlant(tree1);
myGarden.addPlant(tree2);
//console.log(myGarden);

myGarden.watering(40);
//console.log(myGarden);
myGarden.watering(70);



