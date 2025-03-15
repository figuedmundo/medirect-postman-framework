const fs = require("fs");
const moment = require("moment");


const getArgument = (args, argument, defaultValue) => {
  let value = args
    .filter((a) => a.startsWith(`-${argument}=`))
    .shift()
    ?.replace(`-${argument}=`, "");

  if (value == undefined) {
    value = defaultValue;
  }

  console.log(`${argument}: ${value}`);
  return value;
};

const editEnvironmentVariable = (environment, key, newValue) => {
  // Find the object with the specified key and update the value
  environment.values.find((variable) => variable.key === key).value = newValue;
};

const reportPath = () => {
  const outputDirectory = `${__dirname}/../reports/`;

  // Create the output directory if it doesn't exist
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  return `${outputDirectory}/report_${dateFormatted()}.html`;
};

const dateFormatted = () => {
  return moment().format("YYYY-MM-DD_HH-mm-ss");
}

module.exports = {
  reportPath,
  dateFormatted,
  getArgument
};
