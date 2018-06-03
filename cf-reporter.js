const fs = require('fs');
const rp = require('request-promise');

class Reporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(contexts, results) {
    console.log('Custom reporter output:');
    const options = {
        method: 'POST',
        uri: 'http://localhost:8080/api/drill',
        body: {
            results: results.testResults,
            path: results.testResults.testFilePath
        },
        json: true
    };

    rp(options)
        .then(function (parsedBody) {
            // POST succeeded...
            console.log('yuhhhhhhh')
        })
        .catch(function (err) {
            // POST failed...
            console.log('error')
        });
        fs.writeFile('./test_results.json', JSON.stringify(results,  undefined, 2)); 
        // send results to api
    }
}

module.exports = Reporter;