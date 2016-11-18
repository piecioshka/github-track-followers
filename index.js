#!/usr/local/bin/node

'use strict';

let program = require('commander');
let Tracker = require('./src/tracker');
let pkg = require('./package.json');

function display(username) {
    let tracker = new Tracker(username, 'display');
    tracker.makeRequest();
}

function save(username) {
    let tracker = new Tracker(username, 'save');
    tracker.makeRequest();
}
program
    .version(pkg.version)
    .description(pkg.description)
    .usage('[options] <username>')
    .option('-d, --display <username>', "Display GitHub user followers", display)
    .option('-s, --save <username>', "Save file in reports/ directory report of GitHub user followers", save)
    .parse(process.argv);

// Default mode.
if (!process.argv.slice(2).length) {
    program.help();
}
