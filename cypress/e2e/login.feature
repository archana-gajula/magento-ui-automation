Feature: Login

Scenario: Successful User Creation
  Given I navigate to the application
  When I Create a new account
  Then I land into the My Account page

Scenario: Successful login with created user
  When I navigate to the application
  When I login with valid user credentials
  Then I should see the Home Page