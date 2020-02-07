const { exec } = require('child_process');
const inquirer = require('inquirer');
var config = require('./config');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'className',
            message: 'Please select a class to compare between source and destination folders?',
            choices: config.classNames
        }
    ])
    .then(answers => {
        logInfo(`Comparing class: ${answers.className}`);
        sendToCompare(answers.className);
    });

function sendToCompare(fileName) {

    let files = {
        sourcePath: `${config.path.source}\\${fileName}`,
        destinationPath: `${config.path.destination}\\${fileName}`
    }

    executeInCommandLine(files);
}

function executeInCommandLine(files) {

    let command = `code -d "${files.sourcePath}" "${files.destinationPath}"`;
    logSuccess(`executing command: ${command}`);

    exec(command, (error, stdout, stderr) => {
        if (error) {
            logError(`exec error: ${error}`);
            return;
        }

        if (stderr) {
            logError(`stderr: ${stderr}`);
            return;
        }
    });
}

function logInfo(message) {
    logMessage("\x1b[34m", message);
}

function logSuccess(message) {
    logMessage("\x1b[32m", message);
}

function logError(message) {
    logMessage("\x1b[31m", message);
}

function logMessage(color, message) {
    console.log(`${color}%s\x1b[0m`, message);
}