import 'cypress-plugin-tab';
require('@4tw/cypress-drag-drop');
require('xpath_cypress');

describe('template spec', () => {
    it('tablas', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.wait(500)
        const datos = [];

        cy.get('.rt-tr-group .rt-td').each(($el, index, $list) => {
            if ($el.text().trim() !== '') {
                datos[index] = $el.text();
            }
        }).then(() => {
            for (let i = 0; i <= datos.length; i++) {
                cy.log(datos[i])
            }
        })
    })
    it('tablas number camps sum', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.wait(500)
        const datos = [];
        let cantidad = 0;
        cy.get('.rt-tr-group .rt-td').each(($el, index, $list) => {
            if ($el.text().trim() !== '') {
                datos[index] = $el.text();
            }
        }).then(() => {
            for (let i = 0; i <= datos.length; i++) {
                cy.log(datos[i])
                if (Number(datos[i])) {
                    cantidad += Number(datos[i])
                    cy.log('cantidad', cantidad)
                }
            }
            cy.log('a cantidad de la sima es ', cantidad)
            expect(cantidad).to.equal(24113)
        })
    })
    it.only('tablas number camps sum', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.wait(500)
        const campo = cy.get(':nth-child(2) > .rt-tr > :nth-child(1)')
        campo.each(($el, index, $list) => {
            const dato = $el.text()
            if (dato.includes("Alden")) {
                cy.log('dato', dato)
                campo.eq(index).next().next().next().then((email) => {
                    const email1 = email.text()
                    expect(email1).to.equal('alden@example.com')
                    cy.log('email1', email1)
                })
            }
        })
    })
})