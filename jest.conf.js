module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx' ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'components/**/*.tsx',
    'pages/**/*.tsx',
  ],
  testMatch: [ '<rootDir>/test/**/*.(test|spec).{js,jsx,ts,tsx}' ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
};
