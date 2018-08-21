'use strict'
export { }
//Create a PostIt a class that has
//a backgroundColor
//a text on it
//a textColor
//Create a few example post-it objects:
//an orange with blue text: "Idea 1"
//a pink with black text: "Awesome"
//a yellow with green text: "Superb!"

class PostIt {
    text: string;
    textColor: string;
    backgroundColor: string;
    

    constructor(text: string, textColor: string, backgroundColor: string) {
        this.text = text;
        this.textColor = textColor; 
        this.backgroundColor = backgroundColor;
    }
}
let postIt1: Object = new PostIt('Idea 1','blue','orange');
console.log(postIt1);
let postIt2: Object = new PostIt('Awesome','black','pink');
console.log(postIt2);
let postIt3: Object = new PostIt('Superb!','green','yellow');
console.log(postIt3);