const program = require('commander');
const api = require('./index');

program
  .command('add')
  .description('add a task')
  .arguments('<taskName>')
  .action((str, options) => {
    console.log(1)
  });

program.parse(process.argv);

console.log(process.argv)