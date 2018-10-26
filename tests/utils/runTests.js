
const countTests = require('./countTests');
const produceTestReport = require('./produceTestReport');
const getFunctionParams = require('./getFunctionParams');


// Run all the tests, collecting the errors and successes
module.exports = function runTests(tests) {

  let errors = [];
  let successes = 0;
  const limit = countTests(tests);
  let counter = 0;

  tests.forEach(testFile => {
    const { fileName, runnables } = testFile;
    console.log('-------------------------------------------');
    console.log(`${fileName} (${runnables.length})`);
    runnables.forEach(testItem => {

      const { name, fn } = testItem;

      const done = () => {
        // If it calls back without throwing, then it succeeded, so log it in green
        counter++;
        successes++;
        const counterAsText = String(counter).padStart(4, '0');
        console.log('\x1b[32m%s\x1b[0m', `${counterAsText} - ${name}`);
        if (counter === limit) {
          produceTestReport({ limit, successes, errors });
        }
      };

      try {
        const fnExpectCallback = getFunctionParams(fn).length > 0;
        if (fnExpectCallback) {
          fn(done);
        } else {
          fn();
          done();
        }
      } catch(error) {
        // If it throws, then it failed, so capture the error thrown and log it in red
        errors.push({
          name,
          error,
        });
        counter++;
        const counterAsText = String(counter).padStart(4, '0');
        console.log('\x1b[31m%s\x1b[0m', `${counterAsText} - ${name}`);
        if (counter === limit) {
          produceTestReport({ limit, successes, errors });
        }
      }
    });
  });

};


