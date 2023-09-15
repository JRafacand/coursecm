import 'cypress-plugin-tab';
require('@4tw/cypress-drag-drop');
require('xpath_cypress');

describe('cypress course', () => {
    it('invoke', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        /*cy.get('#userName-label').invoke("text").should("equal", "Full Name") another way to do it
        cy.get('#userName-label').should(($el) => {
            expect($el.text()).to.equal('Full Name')
        }) another way to do it
        cy.get('#userName-label').invoke("text").then((text) => {
            expect(text).to.equal('Full Name')
        })
        cy.get('#userName').invoke("attr", "placeholder").should("equal", "Full Name")*/
        cy.get('#userName-label').invoke("text").as('info')
        cy.get('@info').should('equal', 'Full Name')
        cy.get('#userName-label').invoke("text").as('infoname')
        cy.get('@infoname').should('contain', 'Full Name').then(() => {
            //cy.get('#userName').invoke('val','Alden')
            cy.get('#userName').type('Alden')
        })
    })
    it('invoke style', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.get('#userName-label').invoke('attr', 'style', 'color:Red')

    })
    it.only('ocultar', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.get('#userName-label').invoke('hide', '5s')

    })
});