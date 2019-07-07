Feature: BDD filesystem package wrking as expected
  becaouse we can

  Scenario: 
    Given a file, in the local filesystem, at path: ".gitignore"
    When i call the readFile function
    Then it contains 
    """
    node_modules
    .vscode
    """

  Scenario:
    Given a directory, in the local filesystem, at path: "features"
    When checkIfDirectoryOrFile is called
    Then return should be 'features is a directory'

  Scenario:
    Given there shall be a file called 'test'
    When createFile is called
    Then it shall contains: 'test created.'

  Scenario:
    Given a file in the local filesystem 'test'
    When  updateFile is called
    Then it tells me the that 'test updated with hello update' 
    
  Scenario:
    Given I want to move a local file 'test'
    When moveFIle is called
    Then it moves to 'test moved to ./test' 

  Scenario:
    Given I need to copy 'features/step_definitions/stepdefs.js' to the root directory
    When i call copyFile
    Then the files new path will be 'features/step_definitions/stepdefs.js has been copyed to ./stepdefs.js'

  Scenario:
    Given i want to delete 'test'
    When i call deleteFile
    Then i get the answer 'test deleted.'

  Scenario:
    Given a directory created as 'jibjab'
    When i call createDirectory
    Then 'jibjab created' should be the output.

  Scenario:
    Given I have a directory i want to move called 'jibjab'
    When i call moveDirectory
    Then it moves the directory to 'jibjab moved to ./jibjab'

  Scenario:
    Given a directory, in the local filesystem, at path:'./features/step_definitions'
    When i call the function copyDirectory to './step_definitions'
    Then it will copy it to './features/step_definitions has been copyed to ./step_definitions'

  Scenario:
    Given a directory i want to delete called 'jibjab'
    When deleteDirectory is called
    Then it returns 'jibjab removed.'

  Scenario:
    Given a local directory called 'features/'
    When listDirectory is called
    Then it lists 'acceptance_criterias.feature, step_definitions'
    

  Scenario:
    Given the file 'cucumber.js'
    When i call getItemStats on it
    Then i get the object
    """
    Stats {
      dev: 2051,
      mode: 33204,
      nlink: 1,
      uid: 1000,
      gid: 1000,
      rdev: 0,
      blksize: 4096,
      ino: 19534777,
      size: 91,
      blocks: 8,
      atimeMs: 1529493122473.9346,
      mtimeMs: 1529394330149.0166,
      ctimeMs: 1529394330149.0166,
      birthtimeMs: 1529394330149.0166,
      atime: 2018-06-20T11:12:02.474Z,
      mtime: 2018-06-19T07:45:30.149Z,
      ctime: 2018-06-19T07:45:30.149Z,
      birthtime: 2018-06-19T07:45:30.149Z }
    """
    