const { getRandomWordSync, getRandomWord } = require('word-maker');

const { appendLineToOutputFile } = require('./utils/fileUtils');
const {run: runTaskOne} = require('./tasks/taskOne');
const {run: runTaskTwo} = require('./tasks/taskTwo');
const {runNormal: runTaskThreeNormal, runFizzBuzz: runTaskThreeFizzBuzz} = require('./tasks/taskThree');
const {runSynchronous: runTaskFourSync, runAsynchronous: runTaskFourAsync} = require('./tasks/taskFour');
const {runSynchronous: runTaskFiveSync, runAsynchronous: runTaskFiveAsync} = require('./tasks/taskFive');
const {run: runBonus} = require('./tasks/bonus');

// console.log('It works!');

// YOUR CODE HERE
runTaskOne();

runTaskTwo();

runTaskThreeNormal();
runTaskThreeFizzBuzz();

runTaskFourSync();
runTaskFourAsync();

runTaskFiveSync();
runTaskFiveAsync();

runBonus();