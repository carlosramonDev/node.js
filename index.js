import fs from 'fs';
import chalk from 'chalk';

function handleError(error) {
    console.log(error);
    throw new Error(chalk.red(error.code, 'não há arquivo no diretório'));
}

function getFile(filePath) {
    const encoding = 'utf_8';
    fs.promises
        .readFile(filePath, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(handleError)
}

/* function getFile(filePath) {
    const encoding = 'utf_8';
    fs.promises
        .readFile(filePath, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(handleError)
} */

/* function getFile(filePath) {
    const encoding = 'utf-8';
    fs.readFile(filePath, encoding, (error, texto) => {
        if (error) {
                handleError(error);
            }
        console.log(chalk.green(texto))
    })
} */

getFile('./files/');

