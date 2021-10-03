/**
 * @type {import('@jest/types').Config.InitialOptions}
 */

const config = {
	verbose: true,
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"^@components(.*)$": "<rootDir>/components/$1",
	},
};

module.exports = config;
