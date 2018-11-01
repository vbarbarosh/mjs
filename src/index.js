require('@babel/register')({
    presets: ['power-assert', ['@babel/preset-env', {targets: {node: 'current'}}]],
    ignore: [/node_modules/]
});
global.assert = require('power-assert');
