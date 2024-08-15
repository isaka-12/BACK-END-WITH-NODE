//importing required modules
const fs = require('fs');//file system module

const path = require('path');//path module


const filePath = path.join(__dirname, 'Myfile.txt');//joining the file path

//reading the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file',err);
        return;
    }
    console.log(data);
});