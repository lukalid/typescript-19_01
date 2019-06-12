// let & const
let variable: string;
variable = "Some value";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 60;
console.log(maxLevels);
// maxLevels = 120; // nope, vanilla bby

// Block scope
function reset() {
    // console.log(variable); // nope, because it's declared in the next line
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
const add = function (num1: number, num2: number): number {
    return num1 + num2;
};
const multiply = (num1: number, num2: number): number => num1 * num2;
const greet = (): void => console.log('hello');
const greetFriend = (friend: string): void => console.log('hello ' + friend);

// Default Parameters
const countdown = (start: number = 10): void => {
    while (start > 0) {
        start--;
    }
    console.log("Done.", start);
};

// Rest & Spread
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.max(...numbers)); // spread

function makeArray(...args: number[]): number[] { // rest
    return args;
}
const arr = makeArray(1, 2, 3);

// Destructuring
const games: string[] = ["WoW", "LoL"];
console.log(games[0], games[1]);
// const game1 = games[0];
// const game2 = games[1];
const [game1, game2] = games;
console.log(game1, game2);

const userData = {
    username: "pera",
    password: "mika"
};
// const username = userData.username;
// const password = userData.password;
const { password, username } = userData; // names matter, order doesn't
console.log(username, password);

const { username: param1, password: param2 } = userData; // aliases
console.log(param1, param2);

// Template Literals
const game = "WoW";
// const report = "The best game is: " + game;
const report = `Report:
The best game is: ${game}
`;
console.log(report);