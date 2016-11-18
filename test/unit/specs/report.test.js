'use strict';

let Report = require('../../../src/report');

describe('General', () => {
    let followers, username;

    it('should be a constructor', () => {
        expect(typeof Report).toEqual('function');
        expect(() => {
            return new Report();
        }).not.toThrow();
    });

    beforeEach(() => {
        followers = [{ login: 'bbb' }, { login: 'aaa' }];
        username = 'test-user';
    });

    it('should serialize properly', () => {
        let r = new Report(username, followers);

        let results = `
GitHub user "${username}" has followers (${followers.length}):\n
* ${followers.map((follower) => follower.login).join('\n* ')}

`;

        expect(r.serialize()).toEqual(results);
    });

    it('should display properly', () => {
        let r = new Report(username, followers);
        // TODO(piecioshka); how test that method of Console object execute
    });

    it('should sorted followers properly', () => {
        let sortedFollowers = Report.sortFollowersByLogin(followers).map(follower => follower.login);
        expect(sortedFollowers.join(',')).toEqual('aaa,bbb');
    });
});
