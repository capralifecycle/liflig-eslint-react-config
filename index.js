module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    // Keep next line only if having React.
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["jsx-a11y"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    // Keep next property only if having React.
    // TODO: This is not needed for tsx files? See https://www.npmjs.com/package/@typescript-eslint/parser#parseroptionsecmafeaturesjsx
    ecmaFeatures: {
      jsx: true,
    },
  },
  // Keep next property only if having React.
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Common rules we turn off.
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    // Detect floating promises.
    "@typescript-eslint/no-floating-promises": "error",
    "react/prop-types": "off",
  },
};
