const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const fox = require('../../fox');

Given('a file, in the local filesystem, at path: {string}', function (string) {});
When('i read the file', function () {});
Then('it contains', function (docString) {
  assert.equal(docString, fox.readLocal('.gitignore'))
});

Given('a directory, in the local filesystem, at path: {string}', function (string) {});
When('the appropriate function is called', function () {});
Then('it returns a true', function () {
  assert.equal(true, fox.checkDirectory('features/'))
});
