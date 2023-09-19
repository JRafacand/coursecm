import { Given } from "@badeball/cypress-cucumber-preprocessor";



Given("Open navegator", () => {
    cy.visit('https://demoqa.com/')
    cy.title().should('eq', 'DEMOQA')
    cy.wait(1000) 
});