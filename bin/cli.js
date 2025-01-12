#!/usr/bin/env node

"use strict";

const { program } = require("commander");
const { Tracker } = require("../src/tracker");
const pkg = require("../package.json");
const { defaultFormat } = require("../src/config");
const serializersMap = require("../src/serializers/");

program
    .version(pkg.version)
    .description(pkg.description)
    .usage("-u <username>")
    .option("-u, --user <username>", "fetch and display followers from GitHub")
    .usage("-f <format>")
    .option("-f, --format <format>", "output format: json, plain")
    .action(function ({ user, format: passedFormat }) {
        const format =
            passedFormat && serializersMap.hasOwnProperty(passedFormat)
                ? passedFormat
                : defaultFormat;
        if (user) {
            const tracker = new Tracker(user, format);
            tracker.fetchFollowers();
        } else {
            program.help();
        }
    })
    .parse(process.argv);
