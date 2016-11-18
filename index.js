#!/usr/local/bin/node

'use strict';

let program = require('commander');
let Tracker = require('./src/tracker');
let pkg = require('./package.json');

function display(username) {
    let tracker = new Tracker(username, 'display');
    tracker.makeRequest();
}

program
    .version(pkg.version)
    .description(pkg.description)
    .usage('[options] <username>')
    .command('<username>', "display GitHub User Followers")
    .action(display)
    .parse(process.argv);
