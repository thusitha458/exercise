const fs = require('fs');

const OUTPUT_FILE = './output.txt';

const outputFileWriteStream = fs.createWriteStream(OUTPUT_FILE);

module.exports.appendLineToOutputFile = data => {
    outputFileWriteStream.write(`${data}\n`);
};