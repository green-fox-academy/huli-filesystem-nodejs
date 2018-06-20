'use strict';


module.exports = function functionDefinitions(module) {
  return {
    createFile(fileName) {
      let tempData = 'hello wolrd!';
      try {
        module.writeFileSync(`./${fileName}`, tempData);
        return `${fileName} created.`;
      } catch(e) {
        return e;
      }
    },

    readFile(path) {
      try {
        let content = module.readFileSync(`./${path}`, 'utf-8');
        return content;
      } catch(e) {
        return e;
      }
    },

    updateFile(fileName, content) {
      try {
        module.writeFileSync(`./${fileName}`, content);
        return `${fileName} updated with ${content}`
      } catch(e) {
        return e;
      }
    },

    deleteFile(fileName) {
      try {
        module.unlinkSync(`./${fileName}`);
        return `${fileName} deleted.`
      } catch(e) {
        return e;
      }
    },

    createDirectory(directoryName) {
      try {
        module.mkdirSync(`./${directoryName}`);
        return `${directoryName} created`;
      } catch(e) {
        return e;
      }
    },

    listDirectory(directoryName) {
      try {
        return module.readdirSync(`./${directoryName}`).join().replace(/,/gi, ', ');
      } catch(e) {
        return e;
      }
    },

    deleteDirectory(directoryName) {
      try {
        module.removeSync(`./${directoryName}`);
        return `${directoryName} removed.`;
      } catch(e) {
        return e;
      }
    },

    checkIfDirectoryOrFile(path) {
      try {
        if(module.statSync(path).isDirectory()) {
          return `${path} is a directory`;
        } else if(module.statSync(path).isFile()) {
          return `${path} is a file.`
        } else {
          return 'No such file or directory.';
        }
      } catch(e) {
        return e;
      }
    },

    moveFile(fileName, destination) {
      try {
        module.moveSync(`./${fileName}`, `./${destination}`);
        return `${fileName} moved to ./${destination}`;
      } catch(e) {
        return e;
      }
    },

    moveDirectory(directoryName, destination) {
      try {
        module.moveSync(`./${directoryName}`, `./${destination}`);
        return `${directoryName} moved to ./${destination}`;
      } catch(e) {
        return e;
      }
    },

    copyFile(fileName, destination) {
      try {
        module.copyFileSync(fileName, destination);
        return `${fileName} has been copyed to ./${destination}`;
      } catch(e) {
        return e;
      }
    },

    copyDirectory(directoryName, destination) {
      try {
        module.copy(directoryName, destination);
        return `${directoryName} has been copyed to ${destination}`;
      } catch(e) {
        return e;
      }
    },

    getItemStats(fileName) {
      try {
        return module.statSync(`./${fileName}`);
      } catch(e) {
        return e;
      }
    }
  }
};

