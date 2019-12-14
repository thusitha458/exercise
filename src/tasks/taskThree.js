const {getRandomWord} = require('word-maker');

module.exports.runNormal = () => {
    let randomWordPromises = [];
    for (let i = 0; i < 100; i++) {
        randomWordPromises.push(getRandomWord());
    }
    Promise.all(randomWordPromises).then(randomWords => {
        randomWords.forEach((word, index) => console.log(`${index + 1}: ${word}`));
    });
};

module.exports.runFizzBuzz = () => {
    let wordAfterNumberPromises = [];
    for (let i = 0; i < 100; i++) {
        wordAfterNumberPromises.push(new Promise(resolve => {
            let multipleOfThree = (i + 1) % 3 === 0;
            let multipleOfFive = (i + 1) % 5 === 0;

            if (multipleOfThree && multipleOfFive) {
                resolve("FizzBuzz");
            } else if (multipleOfThree) {
                resolve("Fizz");
            } else if (multipleOfFive) {
                resolve("Buzz");
            } else {
                getRandomWord().then(resolve);
            }
        }));
    }

    Promise.all(wordAfterNumberPromises).then(wordsAfterNumbers => {
        wordsAfterNumbers.forEach((word, index) => console.log(`${index + 1}: ${word}`));
    });
};