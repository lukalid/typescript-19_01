// Solution 1
const double = (value: number):number => value * 2;
console.log(double(10));

// Solution 2
const hello = (name: string = "Max"): void => console.log(`Hello, ${name}`);
hello();
hello("Anna");

// Solution 3
const numbersArray = [1, 2, 3, 4, 5];
console.log(Math.min(...numbersArray));

// Solution 4
const numbersNewArray = [7, 8];
numbersNewArray.push(...numbersArray);
console.log(numbersNewArray);

// Solution 5
const testResults = [1, 2, 3];
const [testResult1, testResult2, testResult3] = testResults;

// Solution 6
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
