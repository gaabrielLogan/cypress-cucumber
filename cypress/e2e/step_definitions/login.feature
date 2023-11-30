Feature: Login
 
  Scenario: Successful login
    Given I am on the login page
    When I fill in correct credentials and submit
    Then I should be redirected to the home page
    And I should see a welcome message


  Scenario: Attempting login with invalid credentials
    Given I am on the login page
    When I fill in invalid credentials and submit
    Then I should see an error message
