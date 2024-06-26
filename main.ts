#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

async function name() : Promise <void> {
    const input = await inquirer.prompt(
        {
            name : "name",
            type : "input",
            message : "Enter your Name:",
            validate : ((value) => {
                if (value === "") {
                    return ("Please Enter Your Name") 
                } else {
                    return true;
                }
            })
        }
    ) 
    console.log("\n")
    console.log(chalk.blue.bold.italic.underline(`##### WELCOME ${input.name} TO THE QUIZ! #####`))
}
await name()

let score = 0;

const quiz : {question : string, choices : string[], correctAnswer : any}[] = [
    {
        question : "1. TypeScript is a _____ language.",
        choices : ["a) dynamically typed", "b) statically typed", "c) loosely typed", "d) None of the above"],
        correctAnswer : "b) statically typed"
    },
    {
        question : "2. TypeScript is a superset of which language?",
        choices : ["a) JavaScript", "b) Java", "c) Python", "d) C++"],
        correctAnswer : "a) JavaScript"
    },
    {
        question : "3. Which extension is used for TypeScript files?",
        choices : ["a) .js", "b) .ts", "c) .css", "d) .html"],
        correctAnswer : "b) .ts"
    },
    {
        question : "4. TypeScript was developed by:",
        choices : ["a) Google", "b) Facebook", "c) Microsoft" ,"d) Apple"],
        correctAnswer : "c) Microsoft"
    },
    {
        question : "5. TypeScript code is transcompiled to _____ before executing.",
        choices : ["a) JavaScript", "b) Python", "c) C++", "d) TypeScript"],
        correctAnswer : "a) JavaScript"
    },
    {
        question : "6. Which of the following is true about TypeScript?",
        choices : ["a) It supports optional static typing.", "b) It enforces strict dynamic typing.", "c) It doesn't support functions.", "d) It's only compatible with Node.js."],
        correctAnswer : "a) It supports optional static typing.",
    },
    {
        question : "7. TypeScript provides support for:",
        choices : ["a) Generics", "b) Inheritance", "c) Modules", "d) All of the above"],
        correctAnswer : "d) All of the above"
    },
    {
        question : "8. TypeScript compiler is called:",
        choices : ["a) TSC", "b) TFC", "c) TMC", "d) TPC"],
        correctAnswer : "a) TSC"
    },
    {
        question : "9. Which command is used to compile TypeScript files?",
        choices : ["a) tsc", "b) compile", "c) tscompile", "d) ts"],
        correctAnswer : "a) tsc"
    },
    {
        question : "10. TypeScript supports:",
        choices : ["a) Interfaces", "b) Classes", "c) Enums", "d) All of the above"],
        correctAnswer : "d) All of the above"
    }
]

let grade = ""
let status = ""

// Looping through each quiz
for (let i = 0; i < quiz.length; i++) {
    console.log("\n")
    const response = await inquirer.prompt(
        {
            name : "answer",
            type : "list",
            message : quiz[i].question,
            choices : quiz[i].choices
        }
    )
    if (response.answer === quiz[i].correctAnswer) {
        console.log(chalk.greenBright("Correct Answer!"))
        score++
    } else {
        console.log(chalk.redBright("Incorrect Answer!"))
        console.log(`Correct Answer is: ${quiz[i].correctAnswer}`)
    }
}
const percentage = (score/quiz.length) * 100 


if (percentage >= 90) {
    grade = "A+",
    status = "Pass"
}
else if (percentage >= 80) {
    grade = "A",
    status = "Pass"
}
 else if (percentage >= 70) {
    grade = "B"
    status = "Pass"
} 
else if (percentage >= 60) {
    grade = "C"
    status = "Pass"
} 
else if (percentage >= 50) {
    grade = "D"
    status = "Pass"
} 
else if (percentage >= 40) {
    grade = "E"
    status = "Pass"
} 
else {
    grade = "F",
    status = "Fail"
}

console.log("\n")

// Calculate the total points and percentage 

console.log(`Total Score: ${score}/${quiz.length}`)
console.log(`Percentage: ${percentage}%`)
if (grade === "A+") {
    console.log(chalk.greenBright(`Your Grade: ${grade}`));
} else if (grade === "A"){
    console.log(chalk.greenBright(`Your Grade: ${grade}`));
} else if (grade === "B"){
    console.log(chalk.green(`Your Grade: ${grade}`));
} else if (grade === "C"){
    console.log(chalk.green(`Your Grade: ${grade}`));
} else if (grade === "D"){
    console.log(chalk.yellow(`Your Grade: ${grade}`));
} else if (grade === "E"){
    console.log(chalk.yellow(`Your Grade: ${grade}`));
} else if (grade === "F"){
    console.log(chalk.redBright(`Your Grade: ${grade}`));
}

if (status === "Pass") {
    console.log(chalk.greenBright(`Your Status: ${status}`))
} else {
    console.log(chalk.redBright(`Your Status: ${status}`))
}