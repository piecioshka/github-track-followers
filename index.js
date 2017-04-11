#!/usr/bin/env node

'use strict';

let program = require('commander');
let Tracker = require('./src/tracker');
let pkg = require('./package.json');

function display(username) {
    let tracker = new Tracker(username);
    tracker.fetchFollowers();
}

program
    .version(pkg.version)
    .description(pkg.description)
    .usage('[options] <username>')
    .command('<username>', 'display GitHub user followers')
    .action(display)
    .parse(process.argv);
