#!/usr/bin/env node

"use strict";

const colors = require("colors");
const { program } = require("commander");
const { Tracker } = require("../src/tracker");
const pkg = require("../package.json");
const { defaultFormat } = require("../src/config");
const serializersMap = require("../src/serializers/");
const debug = require("debug")("github-track-followers:cli");

program
    .version(pkg.version)
    .description(pkg.description)
    .usage("-u <string> [-f <string>] [-a]")
    .option("-u, --username <string>", "fetch GitHub followers of this user")
    .option(
        "-f, --format <string>",
        "output format: json, plain",
        (format) => {
            if (format && !serializersMap.hasOwnProperty(format)) {
                console.error(
                    colors.red(
                        `Invalid format: "${format}". Use one of: ${Object.keys(
                            serializersMap
                        ).join(", ")}`
                    )
                );
                program.outputHelp();
                process.exit(3);
            }
            return format;
        },
        defaultFormat
    )
    .action((opts) => {
        debug(opts);

        if (!opts.username) {
            console.error(
                colors.red("Missing required argument: -u, --username")
            );
            program.outputHelp();
            process.exit(2);
        }

        const tracker = new Tracker(opts);
        tracker.fetchFollowers();
    })
    .parse(process.argv);
