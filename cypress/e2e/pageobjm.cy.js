import proyecto1 from "../support/PageObejects/Proyect1/proyect1";
import 'cypress-plugin-tab';
require('@4tw/cypress-drag-drop');
require('xpath_cypress');

const proyect1 = new proyecto1();

proyect1.visithome();


describe('Page Object Model', () => {

    it('Pom', () => {
    cy.log('POM')
    
    })

})
