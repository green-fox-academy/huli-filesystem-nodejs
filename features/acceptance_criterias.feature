Feature: BDD filesystem package wrking as expected
  becaouse we can

  Scenario: 
    Given a file, in the local filesystem, at path: "dirname/apple.txt"
    When i read the file
    Then it contains 
    """
    node_modules
    .vscode
    """

  Scenario:
    Given a directory, in the local filesystem, at path: "dirname/"
    When the appropriate function is called
    Then it returns a 'features is a directory'

  Scenario:
    Given a file, in the local filesystem
    When created at path: "dirname/apple.txt"
    Then it contains: 'hello world'

  Scenario:
    Given a file is the local filesystem
    When edited at path: "dirname/apple.txt"
    Then the contents are: 'hello world'  

  Scenario:
    Given a file is deleted
    When i call the apropriate function
    Then i get the answer 'File deleted'

  Scenario:
    Given a directory created at path 'dirname/'
    When i call it the function
    Then i it says answer 'Directory created'

  Scenario:
    Given a directory deleted at path 'dirname/'
    When deleteLocalDirectory is called
    Then it returns 'Directory removed'

#  Scenario:
#    Given a local directory called 'features/'
#    When readLocalDirectory is called
#    Then it returns 
#      |acceptance_criterias.feature |
#      | step_definitions |

  Scenario:
    Given I want to move a local file 'manual.js'
    When moveLocalFIle is called
    Then it moves to 'manual.js moved to features/manual.js'

  Scenario:
    Given I have a directory i want to move called 'jibjab'
    When i cann moveLocalDirectory
    Then it moves the directory to 'jibjab moved to ./features/jibjab'

  Scenario:
    Given I need to copy 'manual.js' back to the root directory
    When i call copyLocalFile
    Then the files new path will be './features/manual.js copyed to ./manual.js'

  Scenario: copy directory
    Given a directory, in the local filesystem, at path:'./features/jibjab'
    When i call the function copyLocalDirectory to './jibjab'
    Then it will copy it to './features/jibjab has been copyed to ./jibjab'

  # Scenario:
  #   Given the file './fox.js'
  #   When i call getLocalItemStats on it
  #   Then i get the object 'Stats {\ndev: 2051,\nmode: 33188,\nnlink: 1,\nuid: 1000,\ngid: 1000,\nrdev: 0,\nblksize: 4096,\nino: 14418233,\nsize: 2515,\nblocks: 8,\natimeMs: 1529310932171.6648,\nmtimeMs: 1529310928399.6418,\nctimeMs: 1529310928399.6418,\nbirthtimeMs: 1529310928399.6418,\natime: 2018-06-18T08:35:32.172Z,\nmtime: 2018-06-18T08:35:28.400Z,\nctime: 2018-06-18T08:35:28.400Z,\nbirthtime: 2018-06-18T08:35:28.400Z }'
    