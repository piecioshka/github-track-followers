#!/usr/bin/env node

"use strict";

const colors = require("colors");
const minimist = require("minimist");
const { Tracker } = require("../src/tracker");
const pkg = require("../package.json");
const { defaultFormat } = require("../src/config");
const serializersMap = require("../src/serializers/");
const debug = require("debug")("github-track-followers:cli");

function showHelp() {
    console.log(`Usage: cli -u <username> [-f <format>]

${pkg.description}

Options:
  -V, --version            output the version number
  -u, --username <string>  fetch GitHub followers of this user
  -f, --format <string>    output format: json, plain (default: "${defaultFormat}")
  -h, --help               display help for command`);
}

const argv = minimist(process.argv.slice(2), {
    string: ["username", "format"],
    boolean: ["help", "version"],
    alias: {
        u: "username",
        f: "format",
        h: "help",
        V: "version"
    },
    default: {
        format: defaultFormat
    }
});

debug(argv);

// Handle version flag
if (argv.version) {
    console.log(pkg.version);
    process.exit(0);
}

// Handle help flag
if (argv.help) {
    showHelp();
    process.exit(0);
}

// Validate required username
if (!argv.username) {
    console.error(
        colors.red("Missing required argument: -u, --username")
    );
    showHelp();
    process.exit(2);
}

// Validate format
if (argv.format && !serializersMap.hasOwnProperty(argv.format)) {
    console.error(
        colors.red(
            `Invalid format: "${argv.format}". Use one of: ${Object.keys(
                serializersMap
            ).join(", ")}`
        )
    );
    showHelp();
    process.exit(3);
}

// Execute tracker
const tracker = new Tracker({
    username: argv.username,
    format: argv.format
});
tracker.fetchFollowers();
