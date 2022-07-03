module.exports = {
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js",
    },
};
