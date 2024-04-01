import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
    cy.visit('login')
})

When("I fill in correct credentials and submit", () => {
    cy.get('input[type="email"]').type(Cypress.env('USER_EMAIL'))
    cy.get('input[type="password"]').type(Cypress.env('USER_PASSWORD'))
    cy.get('button[type="submit"]').click()
})

//test

Then("I should be redirected to the home page", () => {
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/logar`)
})

And("I should see a welcome message", () => {
    cy.get('.alert').should('be.visible')
})
