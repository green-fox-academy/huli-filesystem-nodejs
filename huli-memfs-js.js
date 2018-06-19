'use strict';
const memfs = require('memfs');
const fdef = require('./functionDefnitions');
const huliMemFs = fdef(memfs);

module.exports = huliMemFs;