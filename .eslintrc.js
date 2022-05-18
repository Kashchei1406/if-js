const {assertBabelrcSearch} = require("@babel/core/lib/config/validation/option-assertions");
module.exports = {
        env: {
            "jest": true,
            es6: true,
            browser: true,
            node: true,
        },
        extends: ['airbnb'],
        plugins: [
            'babel',
            'import',
        ],
        parserOptions: {
            ecmaVersion: 6,
            sourceType: "module",
            ecmaFeatures: {
                jsx: true
            }
        },
     rules: {
         "no-console": "off"
     }

 }
