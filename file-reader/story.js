const fs = require('fs');
const path = require('path');

// Define the path to the story file
const filePath = path.join(__dirname, 'story.txt');

// Function to print text with a delay between each character
function printWithDelay(text, delay) {
    let index = 0;
    const interval = setInterval(() => {
        process.stdout.write(text[index]);
        index++;
        if (index === text.length) {
            clearInterval(interval);
            process.stdout.write('\n');
        }
    }, delay);
}

// Read the story file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file');
        return;
    }
    printWithDelay(data, 100); // delay between each character
});
