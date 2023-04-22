import inquirer from 'inquirer';
var Operation;
(function (Operation) {
    Operation["ADD"] = "Addition (+)";
    Operation["SUBTRACT"] = "Subtraction (-)";
    Operation["MULTIPLY"] = "Multiplication (*)";
    Operation["DIVIDE"] = "Division (/)";
})(Operation || (Operation = {}));
function calculate(operation, num1, num2) {
    switch (operation) {
        case Operation.ADD:
            return num1 + num2;
        case Operation.SUBTRACT:
            return num1 - num2;
        case Operation.MULTIPLY:
            return num1 * num2;
        case Operation.DIVIDE:
            if (num2 === 0) {
                throw new Error('Cannot divide by zero');
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operation');
    }
}
function runCalculator() {
    const questions = [
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number:',
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the second number:',
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: Object.values(Operation),
        },
    ];
    inquirer.prompt(questions).then(answers => {
        try {
            const result = calculate(answers.operation, answers.num1, answers.num2);
            console.log(`The result is: ${result}`);
        }
        catch (error) {
            console.error(onmessage);
        }
    });
}
runCalculator();
