Feature: See friend's route
 
Scenario: Trying to see friends Route
  Given I log in in the app
  When  I go to friend page
  Then I can see a route from any friend