#!/usr/bin/env node

'use strict';

const program = require('commander');
const Tracker = require('../src/tracker');
const pkg = require('../package.json');

function display(username) {
    const tracker = new Tracker(username);
    tracker.fetchFollowers();
}

program
    .version(pkg.version)
    .description(pkg.description)
    .usage('[options] <username>')
    .command('<username>', 'display GitHub user followers')
    .action(display)
    .parse(process.argv);
