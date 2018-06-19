'use strict';
const fs = require('memfs');
const fdef = require('./functionDefnitions');
const huliMemFs = fdef(fs);

module.exports = huliMemFs;