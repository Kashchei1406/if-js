const {assertBabelrcSearch} = require("@babel/core/lib/config/validation/option-assertions");
module.exports = {
    env: {
        "jest": true,
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['airbnb/base', 'plugin:jest/recommended', 'jest-enzyme'],
    plugins: [
        'babel',
        'import',
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "no-console": 'off',
        "guard-for-in": 'off',
        'no-restricted-syntax': 'warn',
        'no-param-reassign': 'warn',
        'import/extensions': 'warn',
        'max-classes-per-file': 'warn',
        'no-unused-expressions': 'off',
        'no-return-assign' : 'warn',
    }
}
