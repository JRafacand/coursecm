import proyecto1 from "../support/PageObejects/Proyect1/proyect1";
import 'cypress-plugin-tab';
require('@4tw/cypress-drag-drop');
require('xpath_cypress');

const proyect1 = new proyecto1();

proyect1.visithome();


describe('Page Object Model with Fixture array', () => {


    it('Pom as', () => {
        cy.xpath("//h5[contains(text(),'Elements')]").click({ force: true })
        cy.xpath("//span[contains(text(),'Text Box')]").click({ force: true })
        cy.fixture("example").then(testdata => {
            testdata.forEach((data) => {
                const d_name = data.name
                const d_email = data.email
                const d_currentAddress = data.currentAddress
                const d_permanentAddress = data.permanentAddress


                cy.get('#userName').should('be.visible').type(d_name)
                cy.get('#userEmail').should('be.visible').type(d_email)
                cy.get('#currentAddress').should('be.visible').type(d_currentAddress)
                cy.get('#permanentAddress').should('be.visible').type(d_permanentAddress)
                cy.get('#submit').should('be.visible').click({ force: true })
            })
        })
    })
})