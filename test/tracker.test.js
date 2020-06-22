'use strict';

const Tracker = require('../src/tracker');

describe('General', () => {
    it('should be a constructor', () => {
        expect(typeof Tracker).toEqual('function');
        expect(() => {
            return new Tracker();
        }).not.toThrow();
    });
});
