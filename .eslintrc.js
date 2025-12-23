module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true, // Add Jest globals
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // Must be last to override other configs
  ],
  plugins: ["@typescript-eslint", "jsx-a11y"],
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed in React 18
    "react/prop-types": "off", // Using TypeScript instead
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      // Disable TypeScript-specific rules for plain JS/JSX files
      files: ["*.js", "*.jsx"],
      parserOptions: {
        project: null, // Don't require tsconfig for JS files
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  globals: {
    LAMBDA_ENDPOINT: "readonly", // Define global for webpack DefinePlugin
  },
};
