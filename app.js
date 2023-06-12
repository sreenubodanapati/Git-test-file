const { readFileSync, writeFileSync } = require("fs");
const one = readFileSync("one.txt", "utf-8");

const newfile = writeFileSync(
  "onecopy.txt",
  `This is copy on first file content: ${one}`,
  { flag: "a" }
);
