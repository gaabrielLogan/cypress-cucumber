import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
    cy.visit('login')
})

When("I fill in invalid credentials and submit", () => {
    cy.get('input[type="email"]').type('hagsgsg@gmail.com')
    cy.get('input[type="password"]').type('hsgsgsggssvv')
    cy.get('button[type="submit"]').click()
})

Then("I should see an error message", () => {
    cy.get('.alert').should('be.visible')
})