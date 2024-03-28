import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { faker } from '@faker-js/faker';

Given("Desire to Register a User", () => {
    cy.visit('cadastro')
})

When("I fill in the fields for name, email, and password", () => {
    cy.get('#nome').type(faker.internet.userName())
    cy.get('#email').type(faker.internet.email())
    cy.get('#senha').type(faker.internet.password())
    cy.get('.btn').click() //pipeline
})

Then("When filling name, email, and password fields, display a success message", () => {
    cy.get('.alert').should('be.visible')
})
