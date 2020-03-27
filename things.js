const Commands = require('./commands');

const THINGS_BASE = 'things:///';

const defaultOptions = {
  // title: '',
  // titles: '',
  when: 'today',
  reveal: true,
  'show-quick-entry': true,
  // completed: true,
  // canceled: true,
};

const objectToUrl = (obj) => {
  const object = { ...defaultOptions, ...obj };
  const query = Object
    .entries(object)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&');
  return `?${query}`;
};

const buildUrl = (actionName, options) => `${THINGS_BASE}${actionName}${options ? objectToUrl(options) : ''}`;


// TODO: test new URLSearchParams(obj).toString();

const things = {};

things.add = buildUrl.bind(null, Commands.ADD);
things.search = buildUrl.bind(null, Commands.SEARCH);

module.exports = things;
