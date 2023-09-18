class proyecto1 {
    visithome() {
        let tiempo = 1000   
        before(() => {
            cy.visit('https://demoqa.com/')
            cy.title().should('eq', 'DEMOQA')
            cy.wait(tiempo)
        })
    }
}

export default proyecto1;