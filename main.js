const {info, age} = require('./src/functions');
const devsData = require('./src/data');
const Students = require('./src/Class');

// console.log(info("masud", "23"));
// console.log(devsData);

const stu = new Students();

// console.log(stu.ageCal("Masud Rana", "WordPress", "23"));
console.log(stu.proName);