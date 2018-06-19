'use strict';


module.exports = function functionDefinitions(module) {
  return {
    createFile(fileName) {
      if(typeof fileName !== String) {
        throw new Error;
      } else {
        let tempData = 'hello wolrd!';
        try {
          module.writeFileSync(`./${fileName}`, tempData);
          return `${fileName} created.`;
        } catch(e) {
          return e;
        }
      }
    },

    readFile(path) {
      if(typeof path !== String) {
        throw new Error;
      } else {
        try {
          let content = module.readFileSync(path, 'utf-8');
        } catch(e) {
          return e;
        }
      }
    },

    updateFile(fileName, content) {
      if(typeof fileName !== String && typeof content !== String) {
        throw new Error;
      } else {
        try {
          module.writeFileSync(`./${fileName}`, content);
          return `${fileName} updated with ${content}`
      } catch(e) {
          return e;
        }
      }
    },

    deleteFile(fileName) {
      if(typeof fileName !== String) {
        throw new Error;
      } else {
        try {
          module.unlinkSync(`./${fileName}`);
          return `${fileName} deleted.`
      } catch(e) {
        return e;
      }
      }
    },

    createDirectory(directoryName) {
      if(typeof directoryName !== String) {
        throw new Error;
      } else {
        try {
          module.mkdirSync(`./${directoryName}`);
          return `${directoryName} created`;
        } catch(e) {
          return e;
        }
      }
    },

    listDirectory(directoryName) {
      if(typeof directoryName !== String) {
        throw new Error;
      } else {
        try {
          return module.readdirSync(`./${directoryName}`);
        } catch(e) {
          return e;
      }
      }
    },

    deleteDirectory(directoryName) {
      if(typeof directoryName !== String) {
        throw new Error;
      } else {
        try {
          module.rmdirSync(`./${directoryName}`);
          return `${directoryName} removed.`;
        } catch(e) {
          return e;
        }
      }
    },

    checkIfDirectoryOrFile(path) {
      if(typeof path !== String) {
        throw new Error;
      } else {
        try {
          if(module.statSynch(path).isDirectory()) {
            return `${path} is a directory`;
          } else if(module.statSynch(path).isFile()) {
            return `${path} is a file.`
          } else {
            return 'No such file or directory.';
          }
        } catch(e) {
          return e;
        }
      }
    },

    moveFile(fileName, destination) {
      if(typeof fileName !== String && typeof destination !== String) {
        throw new Error;
      } else {
        try {
          module.moveSync(`./${fileName}`, `./${destination}`);
          return `${fileName} moved to ${destination}`;
        } catch(e) {
          return e;
        }
      }
    },

    moveDirectory(directoryName, destination) {
      if(typeof directoryName !== String && typeof destination !== String) {
        throw new Error;
      } else {
        try {
          module.moveSync(`./${directoryName}`, `./${destination}`);
          return `${directoryName} moved to ${destination}`;
        } catch(e) {
          return e;
        }
      }
    },

    copyFile(fileName, destination) {
      if(typeof fileName !== String && destination !== String) {
        throw new Error;
      } else {
        try {
          module.copyFileSync(fileName, destination);
          return `${fileName} has been copyed to ${destination}`;
        } catch(e) {
          return e;
        }
      }
    },

    copyDirectory(directoryName, destination) {
      if(typeof directoryName !== String && typeof destination !== String) {
        throw new Error;
      } else {
        try {
          module.copy(directoryName, destination);
          return `${directoryName} has been copyed to ${destination}`;
        } catch(e) {
          return e;
        }
      }
    },

    getItemStats(fileName) {
      if(typeof fileName !== String) {
        throw new Error;
      } else {
        try {
          return module.statSynch(fileName);
        } catch(e) {
          return e;
        }
      }
    }
  }
};

