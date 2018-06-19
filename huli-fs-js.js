'use strict';
const fs = require('fs-extra');
const fdef = require('./functionDefnitions');
const huliFs = fdef(fs);

module.exports = huliFs;