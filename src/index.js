require('@babel/register')({
    plugins: [
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from'
    ],
    presets: ['power-assert', ['@babel/preset-env', {targets: {node: 'current'}}]],
    ignore: [/node_modules/]
});
global.assert = require('power-assert');
