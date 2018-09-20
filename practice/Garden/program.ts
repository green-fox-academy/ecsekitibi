import { Garden } from "./garden";
import { Flower } from "./flowers";
import { Tree } from "./trees";

let myGarden: Garden = new Garden;
let myTree1: Tree = new Tree('purple');
let myTree2: Tree = new Tree('orange');
let myFlower1: Flower = new Flower('yellow');
let myFlower2: Flower = new Flower('blue');
myGarden.addPlants(myFlower1);
myGarden.addPlants(myFlower2);
myGarden.addPlants(myTree1);
myGarden.addPlants(myTree2);

myGarden.watering(30);

myGarden.getStatus();
myGarden.watering(100);
myGarden.getStatus();