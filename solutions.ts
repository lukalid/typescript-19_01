// Solution 1
class Car {

    public name: string;
    public acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    public honk(): void {
        console.log("Tooooot!");
    }

    public accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }

}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Solution 2
abstract class BaseObject {

    public width: number = 0;
    public length: number = 0;

    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }

    public abstract calcSize(): number;

}

class Rectangle extends BaseObject {

    constructor(width: number, length: number) {
        super(width, length);
    }

    public calcSize(): number {
        return this.width * this.length;
    }

}

let rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Solution 3

class SomePerson {

    private _firstName: string = "";

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }

}

let somePerson = new SomePerson();
console.log(somePerson.firstName);
somePerson.firstName = "Lu";
console.log(somePerson.firstName);
somePerson.firstName = "Luka";
console.log(somePerson.firstName);
