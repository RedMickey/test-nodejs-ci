const cp = require("child_process");

const nodeRes = cp.execSync("node -v").toString();

console.log("NodeJS version:", nodeRes);

const npmRes = cp.execSync("npm -v").toString();

console.log("npm version:", npmRes);
