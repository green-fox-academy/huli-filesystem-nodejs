const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const fox = require('../../fox');

Given('a file, in the local filesystem, at path: {string}', function (string) {});
When('i read the file', function () {});
Then('it contains', function (docString) {
  assert.equal(docString, fox.readFile('.gitignore'));
});

Given('a directory, in the local filesystem, at path: {string}', function (string) {});
When('the appropriate function is called', function () {});
Then('it returns a {string}', function (string) {
  assert.equal(string, fox.checkIfDirectoryOrFile('features'));
});

Given('a file, in the local filesystem', function () {});
When('created at path: {string}', function (string) {});
Then('it contains: {string}', function (string) {
  assert.equal(string, fox.createFile('testfile.txt'));
});

Given('a file is the local filesystem', function () {});
When('edited at path: {string}', function (string) {});
Then('the contents are: {string}', function (string) {
  assert.equal(string, fox.updateFile('testfile.txt', 'hello world'));
});

Given('a file is deleted', function () {});
let deletedFileMessage = ''
When('i call the apropriate function', function () {
  deletedFileMessage = fox.deleteFile('testfile.txt');
  return deletedFileMessage;
});
Then('i get the answer {string}', function (string) {
  assert.equal(string, deletedFileMessage)
});


let myPath = ''
Given('a directory created at path {string}', function (string) {
  myPath = string
  return myPath
});
let mkdir;
When('i call it the function', function () {
  mkdir = fox.createDirectory(myPath);
});

Then('i it says answer {string}', function (string) {
  assert.equal(string, mkdir);
});


let dirPath;
Given('a directory deleted at path {string}', function (string) {
  dirPath = string
  return dirPath;
});
let rmdir;
When('deleteLocalDirectory is called', function () {
  rmdir = fox.deleteDirectory(dirPath);
  return rmdir;
});

Then('it returns {string}', function (string) {
  assert.equal(string, rmdir);
});


// let readPath;
// Given('a local directory called {string}', function (string) {
//   readPath = string
//   return dirPath;
// });
// let readDir;
// When('readLocalDirectory is called', function () {
//   readDir = fox.listDirectory(readPath)
//   return readDir;
// });

// Then('it returns', function (dataTable) {
//   assert.equal(dataTable, readDir)
// });

let copyFile;
let newLocation;
Given('I want to move a local file {string}', function (string) {
  copyFile = string;
  newLocation = 'features/manual.js'
  return copyFile, newLocation;
});
let movedFile;
When('moveLocalFIle is called', function () {
   movedFile = fox.moveFile(copyFile, newLocation);
  return movedFile;
});

Then('it moves to {string}', function (string) {
  assert.equal(string, movedFile);
});

let movingDirectory;
Given('I have a directory i want to move called {string}', function (string) {
  movingDirectory = string;
  return movingDirectory;
});
let itMoved;
When('i cann moveLocalDirectory', function () {
  itMoved = fox.moveDirectory(movingDirectory, 'features/jibjab');
  return itMoved;
});

Then('it moves the directory to {string}', function (string) {
  assert.equal(string, itMoved);
});
let localFile;
Given('I need to copy {string} back to the root directory', function (string) {
  localFile = string
  return localFile;
});
let copyedFile
When('i call copyFile', function () {
  copyedFile = fox.copyFile('./features/manual.js', './manual.js')
  return copyedFile;
});

Then('the files new path will be {string}', function (string) {
  assert.equal(string, copyedFile);
});
let localDir;
Given('a directory, in the local filesystem, at path:{string}', function (string) {
  localDir = string;
  return localDir;
});

let copyedDir;
When('i call the function copyLocalDirectory to {string}', function (string) {
  copyedDir = fox.copyDirectory(localDir, string)
  return copyedDir;
});

Then('it will copy it to {string}', function (string) {
  assert.equal(string, copyedDir);
});
// let foxie;
// Given('the file {string}', function (string) {
//   foxie = string;
//   return foxie;
// });
// let stats;
// When('i call getItemStats on it', function () {
//   stats = fox.getItemStats(foxie);
//   return stats;
// });

// Then('i get the object {string}', function (string) {
//   assert.equal(string, stats);
// });