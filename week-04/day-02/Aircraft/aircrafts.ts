'use strict'

export class Aircraft {
  protected type: string;
  protected ammoMax: number;
  protected baseDamage: number;
  protected ammoHave: number;
  protected ammoNeed: number;

  constructor(type: string, ammoMax: number, baseDamage: number) {
    this.type = type;
    this.ammoMax = ammoMax;
    this.baseDamage = baseDamage;
    this.ammoHave = 0;
    this.ammoNeed = this.getAmmoNeed()
  }

  fight(): number {
    let damage: number = this.baseDamage * this.ammoHave;
    return damage;
  }
  getAmmoNeed(): number { 
    this.ammoNeed = this.ammoMax - this.ammoHave
    return this.ammoNeed
  }
  refill(ammoFromCarrier: number): void {
    this.ammoHave += ammoFromCarrier
    
  }

  getType(): string {
    return this.type;
  }
  getAllDamage(): number {
    return this.baseDamage * this.ammoHave;
  }
  getStatus(): string {
    return (`Type: ${this.type}, Ammo: ${this.ammoHave}, Base Damage: ${this.baseDamage}, All Damage: ${this.getAllDamage}`)

  }
  isPriority() {
  }
}

