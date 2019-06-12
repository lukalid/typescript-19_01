// Simple Generic
function echo(data: any) {
    return data;
}
console.log(echo("Luka"));
console.log(echo(23));
console.log(echo({ name: "Luka", age: 23 }));

// Better Generic
function betterEcho<T>(data: T): T {
    return data;
}
console.log(betterEcho<string>("Luka"));
console.log(betterEcho("Luka"));
console.log(betterEcho(23));
console.log(betterEcho({ name: "Luka", age: 23 }));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
// testResults.push("string"); // nope

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element: T) => console.log(element));
}
printAll(["Apple", "Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2("Something"));

// Generic Class
class SimpleMath<T extends number, U extends number> { // T extends number | string | ...
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return this.baseValue * this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<number, number>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());