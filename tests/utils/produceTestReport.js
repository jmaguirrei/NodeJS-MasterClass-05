

// Product a test outcome report
module.exports = function produceTestReport({ limit, successes, errors }) {

  console.log('');
  console.log('--------BEGIN TEST REPORT--------');
  console.log('');
  console.log('Total Tests: ', limit);
  console.log('Pass: ', successes);
  console.log('Fail: ', errors.length);
  console.log('');

  // If there are errors, print them in detail
  if (errors.length > 0) {
    console.log('--------BEGIN ERROR DETAILS--------');
    console.log('');
    errors.forEach(function (testError) {
      console.log('\x1b[31m%s\x1b[0m', testError.name);
      const { actual, expected } = testError.error;
      console.dir({
        actual,
        expected,
      }, { colors: true });
      console.log('');
    });
    console.log('');
    console.log('--------END ERROR DETAILS--------');
  }
  console.log('');
  console.log('--------END TEST REPORT--------');
  process.exit(0);

};

