const fs = require('fs-extra');
//const memfs = require('memfs');
import { memfs } from 'memfs';


module.exports = {

  createFile(file_name, imSwitcher) {
    let tempData = 'hello world';
    if(imSwitcher === true || imSwitcher === undefined) {
      try {
        fs.writeFileSync(`./${file_name}`, tempData);
        return tempData;
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try {
        memfs.writeFileSync(`./${file_name}`, tempData);
        return tempData;
      } catch(e) {
        return e;
      }
    } else {
      return 'Invalid argument!';
    }
    
  },

  readFile(path, imSwitcher) {
    if(imSwitcher === true || imSwitcher === undefined) {
      try {
        let content = fs.readFileSync(path, 'utf-8');
        return content;
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try {
        let content = memfs.readFileSync(path, 'utf-8');
        return content;
      } catch(e) {
        return e;
      }
    } else {
      return 'Invalid argument!';
    }
  },

  updateFile(file_name, content, imSwitcher) {
    if(imSwitcher === true || imSwitcher === undefined) {
      try {
        fs.writeFileSync(`./${file_name}`, content);
        return content;
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try {
        memfs.writeFileSync(`./${file_name}`, content);
        return content;
      } catch(e) {
        return e;
      }
    } else {
      return 'Invalid argument!'
    }
    
  },
  
  deleteFile(file_name, imSwitcher) {
    if(imSwitcher === true || imSwitcher === undefined) {
      try {
        fs.unlinkSync(`./${file_name}`);
        return 'File deleted';
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try {
        memfs.unlinkSync(`./${file_name}`);
        return 'File deleted';
      } catch(e) {
        return e;
      }
    } else {
      return 'Invalid argument!';
    };
    
  },
  
  createDirectory(directory_name, imSwitcher) {
    if(imSwitcher === true || imSwitcher === undefined) {
      try {
        fs.mkdirSync(`./${directory_name}`);
        return 'Directory created'
      } catch(e) {
        return 'Directory already exists';
      }
    } else if(imSwitcher === false) {
      try {
        memfs.mkdirSync(`./${directory_name}`);
        return 'Directory created'
      } catch(e) {
        return 'Directory already exists';
      }
    } else {
      return 'Invalid argumnet!';
    }
    
  },
    
  listDirectory(directory_name, imSwitcher) {
    if(imSwitcher === true || imSwitcher === undefined) {
      try {
        return fs.readdirSync(`./${directory_name}`);
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try {
        return memfs.readdirSync(`./${directory_name}`);
      } catch(e) {
        return e;
      }
    } else {
      return 'Invalid argument!';
    }
    
  },

  deleteDirectory(directory_name, imSwitcher) {
    if(imSwitcher === true || imSwitcher === undefined) {
      try{
        fs.rmdirSync(`./${directory_name}`);
        return 'Directory removed'
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try{
        memfs.rmdirSync(`./${directory_name}`);
        return 'Directory removed'
      } catch(e) {
        return e;
      }
    } else {
      return 'Invalid argument!';
    }
    
  },

  checkIfDirectoryOrFile(path, imSwitcher) {
    let value;
    if (imSwitcher === true || imSwitcher === undefined) {
      try {
        if(fs.statSync(path).isDirectory()) {
          return `${path} is a directory`
        } else if(fs.statSync(path).isFile()) {
          return `${path} is a file`
        }
      } catch(e) {
        return 'No such file or directory';
      }
    } else if (imSwitcher === false) {
      try {
        if(memfs.statSync(path).isDirectory()) {
          return `${path} is a directory`
        } else if(memfs.statSync(path).isFile()) {
          return `${path} is a file`
        }
      } catch(e) {
        return 'No such file or directory';
      }
    } else {
      return 'Invalid argument!';
    }
  },

  moveFile(file_name, new_path_full, imSwitcher) {
    if (imSwitcher === true || imSwitcher === undefined) {
      try{
        fs.copyFileSync(file_name, new_path_full);
        fs.unlinkSync(file_name);
        return `${file_name} moved to ${new_path_full}`
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try{
        memfs.copyFileSync(file_name, new_path_full);
        memfs.unlinkSync(file_name);
        return `${file_name} moved to ${new_path_full}`
      } catch(e) {
        return e;
      }
    } else {
      return 'Invalid argument!';
    }
  },

  moveDirectory(directory_name, new_path_full, imSwitcher) {
    if(imSwitcher === true || imSwitcher === undefined) {
      try {
        fs.moveSync(directory_name, new_path_full);
        return `${directory_name} moved to ./${new_path_full}`
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try {
        memfs.moveSync(directory_name, new_path_full);
        return `${directory_name} moved to ./${new_path_full}`
      } catch(e) {
        return e;
      }
    } else {
      return 'Invalid argument!';
    }
  },

  copyFile(file_name, new_path_full, imSwitcher) {
    if(imSwitcher === true || imSwitcher === undefined) {
      try {
        fs.createReadStream(file_name).pipe(fs.createWriteStream(new_path_full));
        return `${file_name} copyed to ${new_path_full}`;
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try {
        memfs.createReadStream(file_name).pipe(memfs.createWriteStream(new_path_full));
        return `${file_name} copyed to ${new_path_full}`;
      } catch(e) {
        return e;
      }
    }
  },

  copyDirectory(directory_name, new_path_full, imSwitcher) {
    if(imSwitcher === true || imSwitcher === undefined) {
      try {
        fs.copy(directory_name, new_path_full);
        return `${directory_name} has been copyed to ${new_path_full}`;
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try {
        memfs.copy(directory_name, new_path_full);
        return `${directory_name} has been copyed to ${new_path_full}`;
      } catch(e) {
        return e;
      }
    } else {
      return 'Invalid argument!';
    }
  },
  
  getItemStats(file_name, imSwitcher) {
    if(imSwitcher === true || imSwitcher === undefined) {
      try {
        return fs.statSync(file_name);
      } catch(e) {
        return e;
      }
    } else if(imSwitcher === false) {
      try {
        return memfs.statSync(file_name);
      } catch(e) {
        return e;
      }
    } else {
      return 'Invalid argument!';
    }
  },
}
