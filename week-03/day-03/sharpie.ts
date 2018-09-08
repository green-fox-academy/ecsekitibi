/*
Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a 
floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount
*/

export class Sharpie {
  private color: string;
  private width: string;
  private inkAmount: number;

  constructor(color: string, width: string) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use(): number {
    return this.inkAmount - 10;
  }
}