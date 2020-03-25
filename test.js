const { execSync } = require('child_process');
const createUrl = require('./things');

const args = process.argv.slice(2);
const url = createUrl(args);
console.log(`Url: ${url}`);

execSync(`open '${url}'`);
