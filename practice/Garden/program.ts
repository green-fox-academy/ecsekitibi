import { Garden } from "./garden";
import { Plant } from "./plants";
import { Flower } from "./flowers";
import { Tree } from "./trees";

let myGarden: Garden = new Garden;
let myTree1: Tree = new Tree('purple');
let myTree2: Tree = new Tree('orange');
let myFlower1: Flower = new Flower('yellow');
let myFlower2: Flower = new Flower('blue');
myGarden.addFlowers(myFlower1);
myGarden.addFlowers(myFlower2);
myGarden.addTrees(myTree1);
myGarden.addTrees(myTree2);

myGarden.watering(30);

myGarden.getStatus();
myGarden.watering(100);
myGarden.getStatus();