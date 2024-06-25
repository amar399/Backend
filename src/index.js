console.debug("Hello World");

// Example: importing modules using import
import fs from 'fs';

const filename = 'myfile.txt';

const dataToWrite = 'I am big fan of ms dhoni . I am form Jharkhand INDIA  and give me some permission';

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data); 
});


fs.writeFile(filename, dataToWrite, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Data has been written to ${filename}`);
});

console.log("This is the end ");