const path = require("path");

// returns platform specific separator
console.log(path.sep);

// join a sequence of path segments using the platform specific separator
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolutePath = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolutePath);