'use strict';
import { Flowers } from "./flowers";
import { Trees } from "./trees";
import { Garden } from "./garden";

let myGarden: Garden = new Garden();
myGarden.addFlowers(new Flowers('yellow'));
myGarden.addFlowers(new Flowers('blue'));
myGarden.addTrees(new Trees('purple'));
myGarden.addTrees(new Trees('orange'));

myGarden.print();

myGarden.watering(40);
myGarden.print();

myGarden.watering(70);
myGarden.print();