import proyecto1 from "../support/PageObejects/Proyect1/proyect1";
import example from "../fixtures/example.json";
import 'cypress-plugin-tab';
require('@4tw/cypress-drag-drop');
require('xpath_cypress');

const proyect1 = new proyecto1();

proyect1.visithome();


describe('Page Object Model with Fixture as (Alias)', () => {

    before(function () {
        cy.fixture('example_1').as("data_j")
    })



    it('Pom as', () => {
        cy.get("@data_j").then((data) => {
            cy.xpath("//h5[contains(text(),'Elements')]").click({ force: true })
            cy.xpath("//span[contains(text(),'Text Box')]").click({ force: true })
            cy.get('#userName').should('be.visible').type(data.name)
        })
    })
})