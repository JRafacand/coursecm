// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

 Cypress.on('uncaught:exception', (err, runnable) => {
    let uncaught = [runnable]
    console.log(uncaught, 'entre')
    //uncaught.
    return false
  }) 

  Cypress.Commands.add('Text_in', (selector, text) => {
    let time = 1000;
    cy.get(selector).should('be.visible').type(text)
    cy.wait(time)
  })

