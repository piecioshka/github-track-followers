#!/usr/bin/env node

'use strict';

const { program } = require('commander');
const Tracker = require('../src/tracker');
const pkg = require('../package.json');

function display(username) {
    const tracker = new Tracker(username);
    tracker.fetchFollowers();
}

program
    .version(pkg.version)
    .description(pkg.description)
    .usage('-u <username>')
    .option('-u, --user <username>', 'fetch and display followers from GitHub')
    .action(function ({ user }) {
        if (user) {
            display(user);
        } else {
            program.help();
        }
    })
    .parse(process.argv);
