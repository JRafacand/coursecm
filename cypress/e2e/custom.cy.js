import 'cypress-plugin-tab';
require('@4tw/cypress-drag-drop');
require('xpath_cypress');

describe('texto', () => {

    it('snnipets', () => {
        
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.Text_in('#userName', 'Juan')
        cy.Text_in('#userEmail', 'Juan_email@gmail')
    })
})