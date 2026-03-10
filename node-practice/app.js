const getMessage = require("./utils/message");

const message = getMessage();

console.log(message);

const chalk = require("chalk").default;

console.log(chalk.green("Server started"));
console.log(chalk.red("Error occurred"));
console.log(chalk.yellow("Warning"));

const os = require("os");

console.log(chalk.yellow("Operating system:", os.platform()));
console.log(chalk.green("Operating system:", os.platform()));

console.log("Home directory:", os.homedir());
console.log("Host name:", os.hostname());

