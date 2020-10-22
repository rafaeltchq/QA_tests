Feature: Create a new user

Scenario: Create a new account @bdd
    Given I have empty email and username fields
    When I create a new user with email and username
    Then I receive a confirmation email