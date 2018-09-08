'use strict'
import { Aircraft } from "./aircrafts";

export class F35 extends Aircraft {
  constructor() {
    super('F35', 12, 50);
  }
  isPriority() : boolean {
    return true;
  }
}