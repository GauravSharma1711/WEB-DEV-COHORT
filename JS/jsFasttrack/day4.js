const fs = require('fs');

//SYNC CODE
// console.log("start");
// const content =  fs.readFileSync('./hello.txt','utf-8')
// console.log("file reading successfull",content);
// console.log("end");



//ASYNC CODE
console.log("hi");
const load = (cb) => {
    fs.readFile('./hello.txt', 'utf-8', (err, content) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        cb(content);
    });
};

load((content) => {
    console.log("File content:", content);
});
console.log("bye");
