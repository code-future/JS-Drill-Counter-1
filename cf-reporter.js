const fs = require('fs');
class Reporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(contexts, results) {
    console.log('Custom reporter output:');
    // fs.writeFile('./test_results.json', JSON.stringify(results,  undefined, 2)); 
    // send results to api
  }
}

module.exports = Reporter;