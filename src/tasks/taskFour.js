const {getRandomWordSync, getRandomWord} = require('word-maker');

module.exports.runSynchronous = () => {
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
            try {
                wordAfterNumber = getRandomWordSync({withErrors: true});
            } catch (error) {
                wordAfterNumber = "It shouldn't break anything!";
            }
        }
        console.log(`${i + 1}: ${wordAfterNumber}`);
    }
};

module.exports.runAsynchronous = () => {
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
                getRandomWord({withErrors: true})
                    .then(resolve)
                    .catch(error => resolve("It shouldn't break anything!"));
            }
        }));
    }

    Promise.all(wordAfterNumberPromises).then(wordsAfterNumbers => {
        wordsAfterNumbers.forEach((word, index) => console.log(`${index + 1}: ${word}`));
    });
};