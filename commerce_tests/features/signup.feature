Feature: Create a new user

Scenario: Create a new account @bdd
    Given I have empty email and username fields
    When I fill fields with email and username
    Then I click 'Create new account'