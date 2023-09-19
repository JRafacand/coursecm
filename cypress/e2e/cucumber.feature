Feature: Cucumber demo

  Scenario: User can create a new account
    Given Open navegator
    When  Type name
    When  Type email
    And   Type Address
    Then  validate page title
