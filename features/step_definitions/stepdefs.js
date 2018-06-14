const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const fox = require('../../fox');

Given('a file, in the local filesystem, at path: {string}', function (string) {});
When('i read the file', function () {});
Then('it contains', function (docString) {
  assert.equal(docString, fox.readLocalFile('.gitignore'));
});

Given('a directory, in the local filesystem, at path: {string}', function (string) {});
When('the appropriate function is called', function () {});
Then('it returns a {string}', function (string) {
  assert.equal(string, fox.checkLocallyIfDirectoryOrFile('features'));
});

Given('a file, in the local filesystem', function () {});
When('created at path: {string}', function (string) {});
Then('it contains: {string}', function (string) {
  assert.equal(string, fox.createLocalFile('testfile.txt'));
});

Given('a file is the local filesystem', function () {});
When('edited at path: {string}', function (string) {});
Then('the contents are: {string}', function (string) {
  assert.equal(string, fox.updateLocalFile('testfile.txt', 'hello world'));
});

Given('a file is deleted', function () {});
let deletedFileMessage = ''
When('i call the apropriate function', function () {
  deletedFileMessage = fox.deleteLocalFile('testfile.txt');
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
  mkdir = fox.createLocalDirectory(myPath);
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
  rmdir = fox.deleteLocalDirectory(dirPath);
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
//   readDir = fox.listLocalDirectory(readPath)
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
   movedFile = fox.moveLocalFile(copyFile, newLocation);
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
  itMoved = fox.moveLocalDirectory(movingDirectory, 'features/jibjab');
  return itMoved;
});

Then('it moves the directory to {string}', function (string) {
  assert.equal(string, itMoved);
});