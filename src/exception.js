'use strict';

let colors = require('colors');

function displayException(error) {
    console.error(colors.red(error));
}

module.exports = {
    displayException
};
