'use strict';

let Report = require('../../../src/report');

describe('General', () => {
    it('should be a constructor', () => {
        expect(typeof Report).toEqual('function');
        expect(() => {
            return new Report();
        }).not.toThrow();
    });
});
