Feature: Login with an user

Scenario: The user is not registered in the site
  Given An unregistered user
  When I fill the data in the form and press submit
  Then An error message should be shown in the screen

Scenario: The user is already registered in the site
  Given An already registered user
  When I fill the data in the form and press submit
  A welcome message should be shown in the screen