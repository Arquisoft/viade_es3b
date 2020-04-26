Feature: Share a route
 
Scenario: Trying to share a Route
  Given I log in in the app
  When  I go to map page 
  And  I share a route
  Then I can see the route in share routes