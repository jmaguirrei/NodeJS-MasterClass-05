

// Dependencies
const { runTests, walkDirectory } = require('./utils');

// Override the NODE_ENV variable
process.env.NODE_ENV = 'testing';


// Application logic for the test runner
const tests = {
  unit: {},
};

tests.init = async function (homePath) {

  const testingFilePaths = await walkDirectory(homePath);

  tests.units = testingFilePaths.map(filePath => {
    const relativePath = '..' + filePath.substr(homePath.length, 10000);
    const fileName = relativePath.substr(relativePath.lastIndexOf('/') + 1, 1000);
    const testsContainerObject = require(relativePath);
    const runnables = Object.keys(testsContainerObject).map(key => {
      return {
        name: key,
        fn: testsContainerObject[key],
      };
    });
    return {
      fileName,
      runnables,
    };
  });


  runTests(tests.units);
  process.exit(0);

};

module.exports = tests;
