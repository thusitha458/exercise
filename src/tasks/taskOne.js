const {getRandomWordSync} = require('word-maker');

module.exports.run = () => {
    for (let i = 0; i < 100; i++) {
        console.log(`${i + 1}: ${getRandomWordSync()}`);
    }
};