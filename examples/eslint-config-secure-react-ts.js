module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021, // Modern JavaScript support
    sourceType: "module", // ES6 module support
    ecmaFeatures: {
      jsx: true, // Support for JSX
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:security/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:sonarjs/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "security",
    "@typescript-eslint",
    "react",
    "jsx-a11y",
    "import",
    "no-secrets",
    "sonarjs",
    "scanjs-rules",
    "dependency-cruiser", // Dependency security checks
    "node", // Node.js security checks
    "complexity", // Code complexity analysis
  ],
  rules: {
    "no-secrets/no-secrets": ["error", { ignoreContent: "localhost" }],
    "scanjs-rules/call_addEventListener": "warn",
    "scanjs-rules/call_setTimeout": "error",
    "scanjs-rules/call_setInterval": "error",
    "scanjs-rules/assign_to_innerHTML": "error",
    "scanjs-rules/assign_to_document.cookie": "error",
    "scanjs-rules/assign_to_location": "error",

    // Security rules
    "security/detect-object-injection": "error",
    "no-eval": "error",
    "security/detect-non-literal-require": "error",
    "security/detect-non-literal-fs-filename": "error",
    "security/detect-unsafe-regex": "error",
    "security/detect-non-literal-regexp": "error",
    "security/detect-child-process": "error",
    "security/detect-buffer-noassert": "error",
    "no-new-func": "error",
    "no-implied-eval": "error",
    "require-atomic-updates": "error",

    // Dependency and Node.js checks
    "dependency-cruiser/no-circular-dependencies": "error",
    "dependency-cruiser/no-deprecated-dependencies": "error",
    "dependency-cruiser/no-vulnerable-dependencies": "error",
    "node/no-deprecated-api": "error",
    "node/no-missing-import": "error",

    // TypeScript rules
    "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
    "immutable/no-let": "error",
    "no-undef": "error",
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],

    "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": true, "ts-nocheck": true, minimumDescriptionLength: 5 }],
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "as", objectLiteralTypeAssertions: "allow-as-parameter" }],
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",

    // React rules
    "react/no-danger": "error",
    "react/jsx-no-target-blank": ["error", { allowReferrer: false, enforceDynamicLinks: "always" }],
    "react/jsx-boolean-value": ["error", "always"],
    "react/no-unescaped-entities": "error",
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
    "react/no-access-state-in-setstate": "error",

    // Code maintainability
    "complexity": ["error", { max: 10 }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-new-func": "error",
    "eqeqeq": ["error", "always", { null: "never" }],

    // Accessibility rules
    "jsx-a11y/alt-text": ["error", { elements: ["img", "object", "area", "input[type='image']"] }],
    "jsx-a11y/click-events-have-key-events": ["error", { handlers: ["onClick"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
