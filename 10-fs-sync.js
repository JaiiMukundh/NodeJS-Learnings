const {readFileSync, writeFileSync, read} = require('fs');

const first = readFileSync('.\\content\\first.txt','utf-8');
const second = readFileSync('.\\content\\second.txt', 'utf-8');

console.log(first,second);

writeFileSync(
    './content/result.txt',
    `here is the result : ${first},${second}`,
    {flag: 'a'}
);
//if the file already exists it will overwrite it