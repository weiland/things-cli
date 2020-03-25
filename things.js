const THINGS_BASE = 'things:///';

const Commands = {
  ADD: 'add',
  SEARCH: 'search',
};

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


const error = (message) => console.error(message) && process.exit(1);

const createUrl = (args) => {
  if (!args || args.length <= 1) {
    error('Insufficient argutments');
  }

  const [command, ...options] = args;

  if (command != Commands.ADD) {
    error(`Invalid command '${command}' `);
  }

  const url = things.add({title: options});
  return url;
};


module.exports = createUrl;
