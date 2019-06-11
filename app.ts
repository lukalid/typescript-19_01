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