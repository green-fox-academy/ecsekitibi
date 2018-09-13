import { Plant } from "./plants";

'use strict'

export class Tree extends Plant {

  constructor(color: string) {
    super(color, 0.4, 10)
  }

}