'use strict';


module.exports = function functionDefinitions(module) {
  return {
    createFileSync(fileName) {
      let tempData = 'hello wolrd!';
      try {
        module.writeFileSync(`./${fileName}`, tempData);
        return `${fileName} created.`;
      } catch(e) {
        return e;
      }
    },

    readFileSync(path) {
      try {
        let content = module.readFileSync(`./${path}`, 'utf-8');
        return content;
      } catch(e) {
        return e;
      }
    },

    updateFileSync(fileName, content) {
      try {
        module.writeFileSync(`./${fileName}`, content);
        return `${fileName} updated with ${content}`
      } catch(e) {
        return e;
      }
    },

    deleteFileSync(fileName) {
      try {
        module.unlinkSync(`./${fileName}`);
        return `${fileName} deleted.`
      } catch(e) {
        return e;
      }
    },

    createDirectorySync(directoryName) {
      try {
        module.mkdirSync(`./${directoryName}`);
        return `${directoryName} created`;
      } catch(e) {
        return e;
      }
    },

    listDirectorySync(directoryName) {
      try {
        return module.readdirSync(`./${directoryName}`).join().replace(/,/gi, ', ');
      } catch(e) {
        return e;
      }
    },

    deleteDirectorySync(directoryName) {
      try {
        if( module.existsSync(directoryName) ) {
          module.readdirSync(directoryName).forEach(function(file,index){
          var curPath = directoryName + "/" + file;
          if(module.lstatSync(curPath).isDirectory()) { // recurse
            deleteFolderRecursive(curPath);
          } else { // delete file
          module.unlinkSync(curPath);
          }
          });
          module.rmdirSync(directoryName);
        }
        return `${directoryName} removed.`;
      }
      catch(e) {
        return e;
      }
    },

    checkIfDirectoryOrFileSync(path) {
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

    moveFileSync(fileName, destination) {
      try {
        module.moveSync(`./${fileName}`, `./${destination}`);
        return `${fileName} moved to ./${destination}`;
      } catch(e) {
        return e;
      }
    },

    moveDirectorySync(directoryName, destination) {
      try {
        module.moveSync(`./${directoryName}`, `./${destination}`);
        return `${directoryName} moved to ./${destination}`;
      } catch(e) {
        return e;
      }
    },

    copyFileSync(fileName, destination) {
      try {
        module.copyFileSync(fileName, destination);
        return `${fileName} has been copyed to ./${destination}`;
      } catch(e) {
        return e;
      }
    },

    copyDirectorySync(directoryName, destination) {
      try {
        module.copy(directoryName, destination);
        return `${directoryName} has been copyed to ${destination}`;
      } catch(e) {
        return e;
      }
    },

    getItemStatsSync(fileName) {
      try {
        return module.statSync(`./${fileName}`);
      } catch(e) {
        return e;
      }
    }
  }
};
