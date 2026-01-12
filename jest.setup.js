// Mock process.exit globally to prevent it from actually exiting during tests
global.processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});

// Reset the mock before each test so spies in tests work correctly
beforeEach(() => {
    global.processExitSpy.mockClear();
});
