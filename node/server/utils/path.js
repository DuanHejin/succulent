const path = require('path');
let context = null;

const setContext = (ctx) => {
  context = ctx;
}

const resolvePath = (relativePath) => {
  if (!context) {
    throw new Error('Context is not been set or is invalid!');
  }
  return path.resolve(context, relativePath);
}

module.exports = {
  setContext,
  resolvePath
};