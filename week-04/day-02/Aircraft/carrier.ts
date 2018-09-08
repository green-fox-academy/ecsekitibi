'use strict'
import { Aircraft } from "./aircrafts";
import { F16 } from "./f16";
import { F35 } from "./F35";

export class Carrier {

  private aircrafts: Aircraft[];
  private storeOfAmmo: number;
  private Hp: number;

  constructor(storeOfAmmo: number, Hp: number) {
    this.aircrafts = [];
    this.storeOfAmmo = storeOfAmmo;
    this.Hp = Hp;
  }
  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft)
  }
  getNoOfPriorPlanes(): number {
    let noOfPrior: number = 0;
    this.aircrafts.forEach(element => {
      if (element.isPriority()) {
        noOfPrior++;
      }
    });
    return noOfPrior;
  }
  fill(): void {
    let totalAmmoNeedPrio: number = 0;
    let totalAmmoNeedNotPrio: number = 0;
    for (let i = 0; i < this.aircrafts.length; i++) {
      if (this.aircrafts[i].isPriority()) {
        totalAmmoNeedPrio += this.aircrafts[i].getAmmoNeed();
      } else {
        totalAmmoNeedNotPrio += this.aircrafts[i].getAmmoNeed();
      }
    }
    if (totalAmmoNeedNotPrio + totalAmmoNeedPrio < this.storeOfAmmo) {
      this.aircrafts.forEach(element => {
        element.refill(element.getAmmoNeed())

      });
      this.storeOfAmmo -= (totalAmmoNeedNotPrio + totalAmmoNeedPrio)
    } else if (totalAmmoNeedPrio < this.storeOfAmmo) {
      this.aircrafts.forEach(element => {
        if (element.isPriority()) {
          element.refill(element.getAmmoNeed());
        } else {
          let noPriorFill: number = (this.storeOfAmmo - totalAmmoNeedPrio) / (this.aircrafts.length - this.getNoOfPriorPlanes())
          element.refill(noPriorFill);
        }
      });
      this.storeOfAmmo = 0;
    } else if (this.storeOfAmmo > 0 && totalAmmoNeedPrio > this.storeOfAmmo) {
      this.aircrafts.forEach(element => {
        if (element.isPriority()) {
          element.refill(this.storeOfAmmo / this.getNoOfPriorPlanes())
        }

      });
      this.storeOfAmmo = 0;
    }
  }
}







