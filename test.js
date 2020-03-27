const things = require('./things');
const cli = require('./cli');

console.log(`Add: ${things.add({title: 'test'})}`);
console.log(`Search: ${things.search({query: 'test'})}`);

const args = process.argv.slice(2);
if (args.length === 0) {
  process.exit(0);
}
const url = cli(args);
console.log(`Cli: ${url}`);

