const fs = require('fs-extra');
const memfs = require('memfs');

module.exports = {

  createFile(file_name) {
    let tempData = 'hello world'
    try {
      fs.writeFileSync(`./${file_name}`, tempData);
      return tempData;
    } catch(e) {
      return e;
    }
  },

  readFile(path) {
    try {
      let content = fs.readFileSync(path, 'utf-8');
      return content;
    } catch(e) {
      return e;
    }
  },

  updateFile(file_name, content) {
    fs.writeFileSync(`./${file_name}`, content);
    return content;
  },
  
  deleteFile(file_name) {
    try {
      fs.unlinkSync(`./${file_name}`);
      return 'File deleted';
    } catch(e) {
      return e;
    }
  },
  
  createDirectory(directory_name) {
      try {
        fs.mkdirSync(`./${directory_name}`);
        return 'Directory created'
      } catch(e) {
        return 'Directory already exists';
      }
  },
    
  listDirectory(directory_name) {
      try {
        return fs.readdirSync(`./${directory_name}`);
      } catch(e) {
        return e;
      }
  },

  deleteDirectory(directory_name) {
    try{
      fs.rmdirSync(`./${directory_name}`);
      return 'Directory removed'
    } catch(e) {
      return e;
    }
  },

  checkIfDirectoryOrFile(path) {  
    try {
      let value;
      if(fs.statSync(path).isDirectory()) {
        return `${path} is a directory`
      } else if(fs.statSync(path).isFile()) {
        return `${path} is a file`
      }
    } catch(e) {
      return 'No such file or directory';
    }
  },

  moveFile(file_name, new_path_full) {
    try{
      fs.copyFileSync(file_name, new_path_full);
      fs.unlinkSync(file_name);
      return `${file_name} moved to ${new_path_full}`
    } catch(e) {
      return e;
    }
  },

  moveDirectory(directory_name, new_path_full) {
    try {
      fs.moveSync(directory_name, new_path_full);
      return `${directory_name} moved to ./${new_path_full}`
    } catch(e) {
      return e;
    }
  },

  copyFile(file_name, new_path_full) {
    try {
      fs.createReadStream(file_name).pipe(fs.createWriteStream(new_path_full));
      return `${file_name} copyed to ${new_path_full}`;
    } catch(e) {
      return e;
    }
  },

  copyDirectory(directory_name, new_path_full) {
    try {
      fs.copy(directory_name, new_path_full);
      return `${directory_name} has been copyed to ${new_path_full}`;
    } catch(e) {
      return e;
    }
  },
  
  getItemStats(file_name) {
    try {
      return fs.statSync(file_name);
    } catch(e) {
      return e;
    }
  },

}
