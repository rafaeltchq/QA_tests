Feature: Access Login page from Home

Scenario: Go to Login Page from Home
    Given I have <otherPage> page
    When I click "Log In" word
    Then I have "Log In" page

Scenario: Go to Log In page from another internal page
    Given I have <otherPage> page
    | Cart |
    | Live-chat |
    | Products |
    When I click "Log in" word
    Then I have "Log In" page