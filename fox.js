const fs = require('fs');

module.exports = {

  readLocal(path) {
    try {
      let content = fs.readFileSync(path, 'utf-8');
      return content;
    } catch(e) {
      return e;
    }
  },

  checkDirectory(path) {  
    try {
      let value = fs.statSync(path).isDirectory();
      return value;
    } catch(e) {
      return false;
    }
  },

}

