const test = require('tape');
import { myObject } from "./apple";

test ("Apple test", (test) => {
    test.equal(myObject.getApple(), "Apple", "sould be the same")
    test.end();
}
)