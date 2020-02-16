module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc',
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.css$': 'jest-transform-css',
  },
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx' ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    'src/pages/**/*.tsx',
  ],
  testMatch: [ '<rootDir>/test/**/*.(test|spec).{js,jsx,ts,tsx}' ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
};
