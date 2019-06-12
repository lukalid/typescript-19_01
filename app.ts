class Person {

    name: string; // default is public
    protected type: string;
    private age: number = 23;

    // username attr is created and gets the value
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
    }

    getType() {
        return this.type;
    }

}

const person = new Person("Pera", "pera");
console.log(person);
person.setType("Gamer");
person.printAge();
console.log(person.getType());

class Gamer extends Person {

    constructor(username: string) {
        super("Luka", username);
        this.type = "Gamer";
    }

}

// Getters & Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species.trim();
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Orc";
console.log(plant.species);
plant.species = "Hoops";
console.log(plant.species);

// Static Properties & Methods
class Util {

    static _pi: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this._pi * diameter;
    }

    static get PI() {
        return this._pi;
    }

}

console.log(Util.PI);
console.log(Util.calcCircumference(2));

// Abstract classes
abstract class Project {
    projectName: string = "Default";
    budget: number;

    constructor(projectName: string, budget: number) {
        this.projectName = projectName;
        this.budget = budget;
    }

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class BestProject extends Project {

    changeName(name: string): void {
        this.projectName = "Best " + name;
    }

}

class WorstProject extends Project {

    changeName(name: string): void {
        this.projectName = "Worst " + name;
    }

}

let project: BestProject = new BestProject("FPIS", 0);
project = new WorstProject("JAVA", 0);
project.changeName("Mhmm");
console.log(project.projectName);

// Private Constructor

class Singleton {

    private static instance: Singleton;

    private constructor() {}

    public static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

}

let singleton = Singleton.getInstance();

// readonly property - can assign through constructor
class ReadOnly {

    public readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

}

let readonly = new ReadOnly("readonly");
console.log(readonly.value);