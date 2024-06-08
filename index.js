#! usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to code with fatima - cli number guessing game");
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 5):",
    },
]);
if (answer.userguessednumber === randomNumber) {
    console.log("congratulation ! you guess a correct number.");
}
else {
    console.log("sorry, you guess a wrong number");
}
