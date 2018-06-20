const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const fox = require('../../huli-fs-js');
let givenState;
let whenState;
Given('a file, in the local filesystem, at path: {string}', function (string) {
  givenState = string;
  return givenState;
});

When('i call the readFile function', function () {
  whenState = fox.readFile(givenState);
  return whenState;
});

Then('it contains', function (docString) {
  assert.equal(docString, whenState);
});


Given('a directory, in the local filesystem, at path: {string}', function (string) {
  givenState = string;
  return givenState;
});

When('checkIfDirectoryOrFile is called', function () {
  whenState = fox.checkIfDirectoryOrFile(givenState)
  return whenState;
});

Then('return should be {string}', function (string) {
  assert.equal(string, whenState);
});


Given('there shall be a file called {string}', function (string) {
  givenState = string;
  return givenState;
});

When('createFile is called', function () {
  whenState = fox.createFile('test')
  return whenState;
});

Then('it shall contains: {string}', function (string) {
  assert.equal(string, whenState);
});


Given('a file in the local filesystem {string}', function (string) {
  givenState = string;
  return givenState;
});

When('updateFile is called', function () {
  whenState = fox.updateFile(givenState, 'hello update')
  return whenState;
});

Then('it tells me the that {string}', function (string) {
  assert.equal(string, whenState);
});


Given('I want to move a local file {string}', function (string) {
  givenState = string;
  return givenState;
});

When('moveFIle is called', function () {
  whenState = fox.moveFile(givenState, givenState);
  return whenState;
});

Then('it moves to {string}', function (string) {
  assert.equal(string, whenState);
});


Given('I need to copy {string} to the root directory', function (string) {
  givenState = string;
  return givenState;
});

When('i call copyFile', function () {
  whenState = fox.copyFile(givenState, 'stepdefs.js');
  return whenState;
});

Then('the files new path will be {string}', function (string) {
  assert.equal(string, whenState);
});


Given('i want to delete {string}', function (string) {
  givenState = string;
  return givenState;
});

When('i call deleteFile', function () {
  whenState = fox.deleteFile(givenState);
  fox.deleteFile('./stepdefs.js')
  return whenState;
});

Then('i get the answer {string}', function (string) {
  assert.equal(string, whenState);
});


Given('a directory created as {string}', function (string) {
  givenState = string;
  return givenState;
});

When('i call createDirectory', function () {
  whenState = fox.createDirectory(givenState);
  return whenState;
});

Then('{string} should be the output.', function (string) {
  assert.equal(string, whenState);
});


Given('I have a directory i want to move called {string}', function (string) {
  givenState = string;
  return givenState;
});

When('i call moveDirectory', function () {
  whenState = fox.moveDirectory(givenState, givenState);
  return whenState;
});

Then('it moves the directory to {string}', function (string) {
  assert.equal(string, whenState);
});

Given('a directory, in the local filesystem, at path:{string}', function (string) {
  givenState = string;
  return givenState;
});

When('i call the function copyDirectory to {string}', function (string) {
  whenState = fox.copyDirectory(givenState, string);
  return whenState;
});

Then('it will copy it to {string}', function (string) {
  assert.equal(string, whenState);
});


Given('a directory i want to delete called {string}', function (string) {
  givenState = string;
  return givenState;
});

When('deleteDirectory is called', function () {
  whenState = fox.deleteDirectory(givenState);
  return whenState;
});

Then('it returns {string}', function (string) {
  assert.equal(string, whenState);
});


Given('a local directory called {string}', function (string) {
  givenState = string;
  return givenState;
});

When('listDirectory is called', function () {
  whenState = fox.listDirectory(givenState);
  return whenState;
});

Then('it lists {string}', function (string) {
  assert.equal(string, whenState);
});


Given('the file {string}', function (string) {
  givenState = string;
  return givenState;
});

When('i call getItemStats on it', function () {
  whenState = fox.getItemStats(givenState);
  return whenState;
});

Then('i get the object', function (docString) {
  assert.deepEqual(docString, whenState);
});