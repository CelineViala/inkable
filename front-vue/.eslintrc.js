module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        
    ],
    
    parserOptions: {
        parser: "@babel/eslint-parser",
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
    },
    plugins: [
        'vue',
    ],
    rules: {
        indent: ['error', 4],
        "vue/multi-word-component-names": 'off'
    },
};
