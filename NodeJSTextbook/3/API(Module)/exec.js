const exec = require('child_process').exec;

let process = exec('ls');

process.stdout.on('data', data => console.log(data.toString()));
process.stderr.on('data', data => console.log(data.toString()));