Feature: Access to Login page
  I want to be able to access to Login page

  Scenario Outline: Go to Login from different sites @bdd
  Given I have "<some>" page with address "<url>"
  When I click Log In word
  Then I have Login page

  Examples:
    | some | url |
    | Home | / |
    | Cart | /cart |
    | Live-chat | /live-chat |
    | Products | /products |