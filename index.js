#!/usr/local/bin/node

'use strict';

let program = require('commander');
let Tracker = require('./src/tracker');

program
    .usage('[options] <username>')
    .option('-d, --display <username>', "Display GitHub user followers", display)
    .option('-s, --save <username>', "Save file in reports/ directory report of GitHub user followers", save)
    .parse(process.argv);

function display(username) {
    let tracker = new Tracker(username, 'display');
    tracker.makeRequest();
}

function save(username) {
    let tracker = new Tracker(username, 'save');
    tracker.makeRequest();
}
