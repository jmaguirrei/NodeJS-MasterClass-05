

const fs = require('fs');
const path = require('path');

// includedPatterns
const includedPatterns = [
  '__tests__',
  '.test.js',
];

// shouldBeIncluded
const shouldBeIncluded = fileOrDir => includedPatterns.reduce((acum, value) => {
  return acum || fileOrDir.indexOf(value) > -1;
}, false);


// readdirAsync
const readdirAsync = function (dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, list) => {
      if (err) reject(err);
      resolve(list);
    });
  });
};

// statAsync
const statAsync = function (file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, stat) => {
      if (err) reject(err);
      resolve(stat);
    });
  });
};


// WalkDir
function walkDir(dir) {
  return readdirAsync(dir)
  .then(list => {
    return Promise.all(list.map(file => {
      const solvedFile = path.resolve(dir, file);
      return statAsync(solvedFile)
      .then(stat => {
        if (stat.isDirectory()) return walkDir(solvedFile);
        if (shouldBeIncluded(solvedFile)) return solvedFile;
        return [];
      });
    }));
  })
  .then(results => {
    // flatten the array of arrays
    return Array.prototype.concat.apply([], results);
  });

}

module.exports = walkDir;

