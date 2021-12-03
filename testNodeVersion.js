const cp = require("child_process");

const res = cp.execSync("node -v").toString();

console.log("NodeJS version:", res);
