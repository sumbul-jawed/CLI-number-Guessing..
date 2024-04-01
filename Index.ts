#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

const randomNumber = Math.floor(Math.random() * 10 - 1 ); 

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.red ("Please guess a number between 1 - 10:"),
    },

]);

if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.blueBright ("congtratulation! you guessed right number."));
} else {
    console.log(chalk.greenBright ("Sorry! You guessed wrong number"));

}