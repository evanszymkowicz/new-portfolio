module.exports = {
  // Use jsdom for browser-like environment
  testEnvironment: "jsdom",

  // Setup files to run after Jest is initialized
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Paths to ignore during testing
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.cache/",
    "/public/",
    "/static/",
  ],

  // Transform files with babel-jest
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  },

  // Module name mapping for imports
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle image imports
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",

    // Handle module aliases (if you use them)
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/style/(.*)$": "<rootDir>/src/style/$1",
  },

  // Code coverage configuration
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!src/**/__tests__/**",
    "!src/style/**",
    "!src/pages/**", // Exclude page files
    "!src/**/style.js", // Exclude styled-components
    "!src/sw-custom.js", // Exclude service worker
  ],

  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },

  // Globals
  globals: {
    __PATH_PREFIX__: "",
  },

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
};
