import 'cypress-plugin-tab';
require('@4tw/cypress-drag-drop');
require('xpath_cypress');

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
    cy.get('#edit-record-4').should('be.visible').click({ force: true })
    cy.wait(500)
    cy.get('#firstName').should('be.visible').type('Gonza Prueba').tab()
      .type('Gonza Tester').tab()
      .type('gonza@prueba.com').tab()
      .type('30').tab()
      .type('500').tab()
      .type('QA').tab()
    cy.get('#submit').should('be.visible').click()
    cy.get('#searchBox').should('be.visible').type('Gonza Prueba').type('{enter}')
    cy.wait(500)
    cy.get('#delete-record-4').should('be.visible').click({ force: true })
  })
  it('Id for Selector', () => {//only, for this option run only this test
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.wait(500)
    cy.get("[placeholder='First Name']").should('be.visible').type('Rafa Prueba')//selector by placeholder
    cy.wait(500)
    cy.get(".custom-control-label").should("be.visible").contains("Female").click()//selector by class and contains
    cy.wait(500)
    cy.get('label.custom-control-label').should('be.visible').contains('Other').click({ force: true })//selector by label and contains
    cy.wait(500)
    cy.get('input#userNumber').should('be.visible').type('1234567890')//selector by id (click left button in the element and select copy selector)
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').should('be.visible').click()//selector by id and nth-child
    cy.get('label.custom-control-label').should('be.visible').contains('Sports').click({ force: true })//selector by label and contains
    cy.wait(500)
    cy.get('input#lastName[type="text"]').should('be.visible').type('Rafa Prueba')//selector by id and type and attribute  
    cy.xpath('//*[@id="userEmail"]').should('be.visible').type('rafa@prueba.com')
    cy.wait(500)
    cy.xpath('//div[text()="Book Store Application"]').should('be.visible').click({ force: true })//selector by text and xpath
    cy.wait(500)
    cy.xpath('//span[contains(text(),"Lo")]').should('be.visible').click({ force: true })//selector by contains and text and xpath  
  })
  it('Quizizz 2', () => {
    let comp = 'DALEFCOMP'
    cy.visit('https://computer-database.gatling.io/computers')
    cy.wait(500)
    cy.get('#add').should('be.visible').click()
    cy.wait(500)
    cy.xpath('//*[@id="name"]').should('be.visible').type(comp)
    cy.wait(500)
    cy.get('input#introduced').should('be.visible').type('2021-05-05')
    cy.wait(500)
    cy.xpath('//*[@id="discontinued"]').should('be.visible').type('2023-05-05')
    cy.xpath("//select[@id='company']").should('be.visible').select('1')
    cy.wait(500)
    cy.get('input.btn.primary').should('be.visible').click()
    cy.wait(500)
    cy.xpath('//div[contains(text(),"has been created")]').should('be.visible')
    cy.wait(500)
    cy.get("[placeholder='Filter by computer name...']").should('be.visible').type('Sony').type('{enter}')
  })
  it('checkbox', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.wait(500)
    cy.get('#tree-node > ol > li > span > button > svg').should('be.visible').click({ force: true })
    cy.wait(500)
    cy.get('#tree-node > ol > li > ol > li:nth-child(1) > span > button > svg').should('be.visible').click({ force: true })
    cy.wait(500)
    cy.get('#tree-node > ol > li > ol > li:nth-child(2) > span > button > svg').should('be.visible').click({ force: true })
    cy.wait(500)
    cy.get('#tree-node > ol > li > ol > li:nth-child(3) > span > button > svg').should('be.visible').click({ force: true })
    cy.wait(500)
    cy.get('#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(1) > span > button > svg').should('be.visible').click({ force: true })
    cy.wait(500)
    cy.get('#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > span > button > svg').should('be.visible').click({ force: true })
    cy.wait(500)
    cy.get('[type="checkbox"]').check({ force: true }).should('be.checked')//for check all and validate
    cy.wait(500)
    cy.get('[type="checkbox"]').uncheck({ force: true }).should('not.be.checked')//for check all and validate
  })
  it('Select', () => {
    cy.visit('https://demoqa.com/select-menu')
    cy.wait(500)
    cy.get('#oldSelectMenu').should('be.visible').select('red').should('have.value', 'red')
    cy.wait(500)
    cy.get('#oldSelectMenu').should('be.visible').select('10').should('have.value', '10') //for select by value 
    cy.get('#cars').should('be.visible').select(["Volvo", "Saab", "Audi"]).then(() => {
      cy.get(':nth-child(4) > .element-list > .menu-list > #item-7 > .text')
        .should('be.visible').click({ force: true })
    })

  })
  it('Select 2', () => {
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').should('be.visible').type('oz')
    cy.xpath('//div[contains(span,"ozonoterapia")]').should('be.visible').click({ force: true })
  })
  it('Contains', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards').should('be.visible').contains('Elements').click({ force: true })
      .then(() => {
        cy.get('#item-0').should('be.visible').contains('Text Box').click({ force: true })
      })
  })
  it('Contains', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards').should('be.visible').contains('Book').click({ force: true })
    cy.get('.books-wrapper').find('.rt-tr-group').eq(5).click({ force: true })

  })
  it('Validate Windows utf-8 or english, proportie charset', () => {
    cy.visit('https://testsheepnz.github.io/random-number.html')
    cy.title().should('eq', 'The Number Game')

    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')//validate charset, this document is utf-8
  })
  it('Validate uRL proportie charset', () => {
    cy.visit('https://testsheepnz.github.io/random-number.html')
    cy.title().should('eq', 'The Number Game')

    cy.url().should('include', 'random-number.html')//validate url
  })
  it('Validate uRL proportie charset', () => {
    cy.visit('https://www.udemy.com/')
    //validate url
  })
  it('upload file', () => {
    cy.visit('https://demoqa.com/upload-download')
    cy.wait(500)
    cy.get('#uploadFile').selectFile('cypress/fixtures/prueba.png')
  })
  it('drag and drop 1', () => {
    let tiempo = 1000
    cy.visit('https://demoqa.com/droppable')
    cy.wait(tiempo)
    cy.get('#draggable').drag('#droppable', { force: true })
  })
  it('drag and drop 3', () => {
    let time = 1000
    cy.visit('https://demoqa.com/links')
    cy.contains('Home').invoke('removeAttr', 'target').click({ force: true })
    cy.wait(time)

  })
  it('mouseslider', () => {
    cy.visit('https://demoqa.com/slider')
    cy.get('.range-slider').invoke('val', '85').trigger('change')
    cy.get('#sliderValue').invoke('val', '85').trigger('change')
  })
  it('each', () => {
    cy.visit('https://demoqa.com/elements')
    cy.get('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(1) > span > div > div.header-text')
    cy.get('.btn').each(($el, index, $list) => {
      //if ($el.text().includes('Accordion'))
      cy.log($el.text())//index and text
      if ($el.text() == 'Droppable') {
        cy.wrap($el).click({ force: true })
      }
    })
  })
  it('reto', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq', 'Automation Exercise')
    cy.get('.panel-heading').contains('Women').click({ force: true })
    cy.get('.panel-body').contains('Dress').click({ force: true })
    for (let i = 0; i <= 2; i++) {
      cy.get('.fa-plus-square').eq(i).click({ force: true })
      cy.get('.btn-default').contains('Add to cart').click({ force: true })
      cy.wait(500)
      cy.get('.btn-success').contains('Continue Shopping').click({ force: true })
      cy.get('.panel-heading').contains('Women').click({ force: true })
      cy.get('.panel-body').contains('Dress').click({ force: true })
      cy.get('.breadcrumb').should('be.visible').contains('Products').click({ force: true })
    }
  })
  it('reto', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq', 'Automation Exercise')
    const datos = [];
    cy.get('.fa-plus-square').each(($el, index, $list) => {
      datos[index] = $el.text();
    }).then(() => {
      for (let i = 0; i <= datos.length; i++) {
        if (i == 34) break;
        cy.get('.fa-plus-square').eq(i).click({ force: true })
        cy.get('.btn-default').contains('Add to cart').click({ force: true })
        cy.wait(500)
        cy.get('.btn-success').contains('Continue Shopping').click({ force: true })
        cy.log(i, 'i Nmero de veces que se ejecuta el for')
        //cy.get('.panel-heading' ).contains('Women').click({force:true})
        //cy.get('.panel-body').contains('Dress').click({force:true}) 
        cy.get('.shop-menu').should('be.visible').contains('Products').click({ force: true })

      }
    })
  })
  

})
