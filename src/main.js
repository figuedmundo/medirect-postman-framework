const path = require('path');
const newman = require('newman');
const { reportPath } = require("./utils");
  
const collection = path.join(__dirname, "/collections/booker-api.postman_collection.json");
const environment = path.join(__dirname, "/collections/automation.postman_environment.json");
console.log(`report: ${reportPath()}`);
newman.run({
    collection: collection,
    environment: environment,
    reporters: ['cli', 'htmlextra'],
    reporter: {
        htmlextra: {
            export: reportPath(),
        }
    }
}, function (err) {
    if (err) {
        console.error('Newman tests failed!', err);
        process.exit(1);
    } else {
        console.log('Newman tests completed successfully!');
    }
});