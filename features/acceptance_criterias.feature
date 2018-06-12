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

  # Scenario:
  #   Given a local directory called 'features/'
  #   When readLocalDirectory is called
  #   Then it returns 
  #     |acceptance_criterias.feature |
  #     | step_definitions |

  Scenario:
    Given I want to move a local file 'manual.js'
    When moveLocalFIle is called
    Then it moves to 'manual.js moved to features/manual.js'