const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, 'test2'), {}, (err) => {
//     if(err) {
//         throw err;
//     } else {
//         console.log("Folder has been created...");
//     }
// });

// create and write to folder
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello Everyone', (err) => {
//     if(err) {
//         throw err;
//     } else {
//         console.log("File written to...");

        // to add more text into the above file
//         fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), '\nI love NodeJs.', (err) => {
//             if(err) {
//                 throw err;
//             } else {
//                 console.log("File written to...");
//             }
//         });
//     }
// });

// read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) {
//         throw err;
//     } else {
//         console.log(data);
//         console.log("File has been read...");
//     }
// });


// rename file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloEveryone.txt'), (err) => {
    if(err) {
        throw err;
    } else {
        // console.log(data);
        console.log("File has been renamed...");
    }
});


