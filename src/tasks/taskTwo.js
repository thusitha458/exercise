const {getRandomWordSync} = require('word-maker');

module.exports.run = () => {
    for (let i = 0; i < 100; i++) {
        let multipleOfThree = (i + 1) % 3 === 0;
        let multipleOfFive = (i + 1) % 5 === 0;

        let wordAfterNumber = "";
        if (multipleOfThree) {
            wordAfterNumber += "Fizz";
        }
        if (multipleOfFive) {
            wordAfterNumber += "Buzz";
        }

        if (wordAfterNumber === "") {
            wordAfterNumber = getRandomWordSync();
        }
        console.log(`${i + 1}: ${wordAfterNumber}`);
    }
};