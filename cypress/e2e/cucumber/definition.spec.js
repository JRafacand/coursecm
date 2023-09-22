import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given("Open navegator", () => {
    cy.visit('https://www.demoblaze.com/')
    cy.title().should('eq', 'STORE')
    cy.wait(1000)
    cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').should('be.visible').click({ force: true })
    cy.get('#tbodyid > div.row > div > a').should('be.visible').click({ force: true })
    cy.window().then(win => {
        cy.stub(win, 'alert').as('alert')
      })
    cy.get('#cartur').should('be.visible').click({ force: true })
    cy.get('#page-wrapper > div > div.col-lg-1 > button').should('be.visible').click({ force: true })
    
});


When("Type name {string}", (name) => {
    cy.get('#name').type(name)
})
And("Type email {string}", (email) => {
    cy.get('#country').type(email)
});

/* And("Type Address {string}", (address) => {
    cy.get('#currentAddress').type(address)
});

And("Type Permanent Address {string}", (paddress) => {
    cy.get('#permanentAddress').type(paddress)
}); */

Then("Click on submit button", () => {
    cy.get('#submit').click({ force: true })
})

