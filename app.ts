interface NamedPerson {
    name: string;
    sport?: string;
    [propName: string]: any;
}

function greet(person: NamedPerson): void { // at least have a name
    console.log("Hello, " + person.name);
}

function changeName(person: NamedPerson, newName: string): void {
    person.name = newName;
}

const person: NamedPerson = {
    name: "Luka",
    age: 23 // -> binds to propName
};

greet(person);
changeName(person, "Anna");
greet(person);

greet({ name: "Luka" }); // yep
//greet({ name: "Luka", age: 23 }); // nope

greet({ name: "Luka" }); // yep
greet({ name: "Luka", sport: "Gaming" }); // yep

// --------------------------------------------------

interface Operation {
    execute(num1: number, num2: number): number;
}

const adder: Operation = {
    execute(number1: number, number2: number): number {
        return number1 + number2;
    }
};
console.log(adder.execute(1, 2));

class Add implements Operation {
    execute(number1: number, number2: number): number {
        return number1 + number2;
    }
}
class Multiply implements Operation {
    execute(number1: number, number2: number): number {
        return number1 * number2;
    }
}

let operation = new Add();
console.log(operation.execute(1, 2));
operation = new Multiply();
console.log(operation.execute(1, 2));

// Function Types
// Whatever uses this interface, must be a function of this type
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (number1: number, number2: number) {
    return (number1 + number2) * 2;
}

console.log(myDoubleFunction(1, 2));

// Interface Inheritance
interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 60,
    name: "Luka"
}

console.log(oldPerson);