import 'cypress-plugin-tab'; 
     

  describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/webtables')
    cy.wait(500)
    cy.title().should('eq', 'DEMOQA')
    cy.wait(500)
    cy.get('#addNewRecordButton').should('be.visible').click()
    cy.wait(500)
    cy.get('#firstName').should('be.visible').type('Rafa Prueba')
    cy.wait(500)
    cy.get('#lastName').should('be.visible').type('Rafa Tester')
    cy.wait(500)
    cy.get('#userEmail').should('be.visible').type('rafa@prueba.com')
    cy.wait(500)
    cy.get('#age').should('be.visible').type('30')
    cy.wait(500)
    cy.get('#salary').should('be.visible').type('500') 
    cy.wait(500)
    cy.get('#department').should('be.visible').type('QA')
    cy.wait(500)
    cy.get('#submit').should('be.visible').click()
    cy.get('#searchBox').should('be.visible').type('Rafa Prueba').type('{enter}')
    cy.wait(500)
    cy.get('#addNewRecordButton').should('be.visible').click()
    cy.wait(500)
    cy.get('#firstName').should('be.visible').type('Gonza Prueba').tab()
    .type('Gonza Tester').tab()
    .type('Gonza@prueba').tab()
    .type('30').tab()
    .type('500').tab()
    .type('QA').tab()
    cy.get('#submit').should('be.visible').click()
    cy.get('#searchBox').should('be.visible').type('Rafa Prueba').type('{enter}')
  })
})
