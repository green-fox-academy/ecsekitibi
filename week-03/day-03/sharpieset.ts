import { Sharpie } from "./sharpie";

/* Reuse your Sharpie class
  Create SharpieSet class
  it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies */

export class Sharpieset {
  sharpielist: Sharpie[];

  constructor() {
    this.sharpielist = [];
  }

  add(color: string, width: number): void {
    let addedSharpie: Sharpie = new Sharpie(color, width)
    this.sharpielist.push(addedSharpie)
  }

  countUsable(): number {
    let usablesharpies: number = 0;
    for (let i = 0; i < this.sharpielist.length; i++) {
      if (this.sharpielist[i].getInkAmount() > 0)
        usablesharpies++
    }
    return usablesharpies

  }

  /*removeTrash(): void {
    this.sharpielist.sort((a, b) => b.inkAmount - a.inkAmount);
    for (let j: number = 0; j <= this.sharpielist.length; j++) {
      if (this.sharpielist[j].inkAmount === 0) {
        this.sharpielist.splice(j, this.sharpielist.length)
      }
    }
  }
  */
  removeTrash(): void {
    this.sharpielist.forEach((elem, index) => {
      if (elem.getInkAmount() <= 0) {
        this.sharpielist.splice(index, 1);
      }
    })

  }

}

let apisz: Sharpieset = new Sharpieset()
let pirosceruza: Sharpie = new Sharpie('piros', 0.5)
apisz.add('kek', 0.4);
apisz.add('zold', 1);
apisz.add('lila', 0.8);
//console.log(apisz);

for (let i = 0; i < 9; i++) {
  apisz.sharpielist[0].use()
}
for (let i = 0; i < 7; i++) {
  apisz.sharpielist[2].use()
}
let sortedSharpie: Sharpie[] = apisz.sharpielist.sort((a: Sharpie, b: Sharpie) => {
  return b.getInkAmount() - a.getInkAmount()
});
console.log(apisz);
console.log(sortedSharpie[0]);



//console.log(apisz.countUsable());
//apisz.removeTrash();

//console.log(apisz);


