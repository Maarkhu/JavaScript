const { readFile } = require("fs");

readFile("./index.js", "utf8", (err, file) => console.log(file));

const hello = () => { setInterval(() => { console.log("Hello World!"); }, 250); };
