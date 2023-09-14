import 'cypress-plugin-tab';
require('@4tw/cypress-drag-drop');
require('xpath_cypress');

describe('cypress course', () => {
    it('alert', () => {
    cy.visit('https://demoqa.com/alerts')
    cy.title().should('eq', 'DEMOQA')
    /* cy.get('#alertButton').click({force: true})
    cy.wait(500)
    cy.on('window:alert', (str) => {
        expect(str).to.equal('You clicked a button')
    }) */
    cy.get('#timerAlertButton').click({force: true})
    cy.wait(5000)
    cy.on('window:alert', (str) => {
        expect(str).to.equal('This alert appeared after 5 seconds')
    })    
})
})