console.log('start deploy server.....');
const spawn = require('cross-spawn');

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const result = spawn.sync(
  'node',
  ['index', '8080'],
  { stdio: 'inherit' }
);
if (result.signal) {
  if (result.signal === 'SIGKILL') {
    console.log(
      'The deploy failed because the process exited too early. ' +
        'This probably means the system ran out of memory or someone called ' +
        '`kill -9` on the process.'
    );
  } else if (result.signal === 'SIGTERM') {
    console.log(
      'The deploy failed because the process exited too early. ' +
        'Someone might have called `kill` or `killall`, or the system could ' +
        'be shutting down.'
    );
  }
  process.exit(1);
}
process.exit(result.status);