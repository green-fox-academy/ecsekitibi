
import { Carrier } from "./carrier";
import { Aircraft } from "./aircrafts";
import { F16 } from "./f16";
import { F35 } from "./F35";

let newCarrier: Carrier = new Carrier(40, 100);
let airCraftF16: Aircraft = new F16();
let airCraftF35: Aircraft = new F35();
let airCraftF16_2: Aircraft = new F16();
newCarrier.add(new F16);
newCarrier.add(new F16);
newCarrier.add(new F35);
newCarrier.add(new F35);
newCarrier.add(new F16);

newCarrier.fill();
newCarrier
console.log(newCarrier);