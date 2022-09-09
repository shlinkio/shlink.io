module.exports = {
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: {
        // This is necessary because next.js forces { "jsx": "preserve" }, but ts-jest requires { "jsx": "react-jsx" }
        jsx: 'react-jsx',
      },
    }],
    '^.+\\.scss$': 'jest-transform-css',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    'src/pages/**/*.tsx',
  ],
  testMatch: ['<rootDir>/test/**/*.(test|spec).{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.ts']
};
