// ts knows that myName should contain a string value
// string
let myName = 'Luka';

// number (int, float, etc.)
let myAge = 23;

// boolean
let master = false;

// (if we don't assign a value immidietly, this is type any)
// let myRealAge; // same as the line below
// let myRealAge: any;

let myRealAge: number;
myRealAge = 15;

// can also do:
let myRealName: string = 'Biggy';

// array
let hobbies = [ "Gaming", "Sports" ]; // an array of strings only

//let anything = [ "string", 0, false ]; // string of type any[]
let anything: any[] = [ "Anything" ];
anything[1] = 25;
console.log(anything[0] + ' ' + anything[1]);

// tuples
// let address = [ "Superstreet", 99 ]; // any[]
let address: [ string, number ] = [ "Superstreet", 99 ]; // tuple

// enum
enum Color {
    Blue,  // 0
    White, // 1
    Red    // 2
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

function getMyName(): string { // type refers to the type of the return value
    return myName;
}
console.log(getMyName());

// void
function sayHello(): void {
    console.log('Voidwalker');
}

// parameter types
function add(value1: number, value2: number): number {
    return value1 + value2;
}
console.log(2, 5);

// functions are types of their own, ofc
// function types
let adder: (val1: number, val2: number) => number;
adder = add;

// objects
// object, with a "name" field of type "string", and "age" field of type "number"
let data: { name: string, age: number } = {
    name: "Luka",
    age: 23
};

// complex
let complex: { data: number[], output: (signal: boolean) => number[] } = {
    data: [ 1, 2, 3, 4, 5],
    output: function (signal: boolean): number[] {
        return this.data;
    }
};

// type allias
type Complex = { data: number[], output: (signal: boolean) => number[] };

let complex2: Complex; // no need for copy pasta

// union types
let myRealRealAge: number | string;
myRealRealAge = 23;
myRealRealAge = "23";

// check types
let finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("finalValue is a string!");
}

// never type
// never finishes, never returns anything
function neverReturns(): never {
    throw new Error("An error!");
}

// null is a specific type

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;