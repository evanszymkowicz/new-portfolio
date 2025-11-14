module.exports = {
  parser: "@babel/eslint-parser", // REPLACES babel-eslint
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed in React 18
    "react/prop-types": "off", // If using TypeScript later
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
