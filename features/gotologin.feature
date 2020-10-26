Feature: Access Login page

# Scenario: Go to Login Page from Home
#     Given I have Home page
#     When I click Log In word
#     Then I have Log In page

Scenario: Go to Log In page from another internal page
    Given I have <other> page
    When I click <final> word
    Then I have <final> page

Examples:
    | other | final |
    | Home | Log In |
    | Cart | Log In |
    | Live-chat | Log In |
    | Products | Log In |