/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import CircleMath = MyMath.Circle; // alias

console.log(MyMath.Circle.calculateCircumference(3));
console.log(CircleMath.calculateCircumference(3));
console.log(MyMath.calculateRectangle(10, 20));
