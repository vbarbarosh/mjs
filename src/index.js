require('babel-register')({
    presets: ['power-assert'],
    ignore: /node_modules/
});
global.assert = require('power-assert');
