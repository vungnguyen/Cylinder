import {Circle} from "./circle";
let circle: Circle = new Circle(5,'pink');
console.log(circle);
console.log(`dien tich hinh tron la ${circle.getArea()}`);

import {Cylinder} from "./cylinder";
let cylynder: Cylinder = new Cylinder(5,8,'red')
console.log(cylynder);
console.log(`the tich hinh tru la ${cylynder.getVolume()}`)