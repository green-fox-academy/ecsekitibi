import { Aircraft } from "./aircrafts";

'use strict'

export class F16 extends Aircraft {
  constructor() {
    super('F16', 8, 30)
  }
  isPriority() : boolean {
    return false;
  }

}