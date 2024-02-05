const {info, age} = require('./src/functions');
const devsData = require('./src/data');
const pro = require('./src/Class');
const fs = require('fs');
const colors = require('colors');
const dotenv = require('dotenv').config();

const data = fs.readFileSync('./data/olddata.txt').toString();


// fs.writeFile('nodebook.txt', data, () => {

// });
console.log(`we are batch 2024`.bgMagenta.black);

console.log(process.env.port);
