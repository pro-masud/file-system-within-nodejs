const {info, age} = require('./src/functions');
const devsData = require('./src/data');
const pro = require('./src/Class');
const fs = require('fs');

const data = fs.readFileSync('./data/olddata.txt').toString();

fs.writeFile('nodebook.txt', data, () => {
    
});

