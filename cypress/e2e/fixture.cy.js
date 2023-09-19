import proyecto1 from "../support/PageObejects/Proyect1/proyect1";
import example from "../fixtures/example.json";
import 'cypress-plugin-tab';
require('@4tw/cypress-drag-drop');
require('xpath_cypress');

const proyect1 = new proyecto1();

proyect1.visithome();


describe('Page Object Model with Fixture', () => {
    
    before(function(){
        cy.fixture('example').then(function(data){
            //this.data = data
            globalThis.data = data
        })
    })
  

    it('Pom', () => {
        cy.xpath("//h5[contains(text(),'Elements')]").click({force: true})
        cy.xpath("//span[contains(text(),'Text Box')]").click({force: true})
        cy.get('#userName').should('be.visible').type(globalThis.data.name)
    })

})