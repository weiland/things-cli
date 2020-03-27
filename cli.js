#!/usr/bin/env node

const { execSync } = require('child_process');
const things = require('./things');
const Commands = require('./commands');
const { error } = require('./utils');


const createUrl = (args) => {
  if (!args || args.length <= 1) {
    error('Insufficient argutments');
  }

  const [command, ...options] = args;

  if (command === Commands.SEARCH) {
    return things.search({query: options});
  }

  if (command != Commands.ADD) {
    error(`Invalid command '${command}' `);
  }

  const url = things.add({title: options});
  return url;
};

const open = (url) => execSync(`open '${url}'`);

const [,, ...args] = process.argv;
const url = createUrl(args);
open(url);

module.exports = createUrl;
exports.open = open;
