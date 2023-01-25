import fs from 'fs';
import chalk from 'chalk';

function getFile(filePath) {
    const encoding = 'utf-8';
    fs.readFile(filePath, encoding, (_, texto) => {
        console.log(chalk.green(texto))
    })
}

getFile('./files/texto.md');