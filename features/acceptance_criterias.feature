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
    Then it returns a true

  Scenario:
    Given a file, in the local filesystem
    When created at path: "dirname/apple.txt"
    Then it contains: 'hello world'      


