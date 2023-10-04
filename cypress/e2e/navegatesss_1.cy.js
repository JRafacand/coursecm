import 'cypress-plugin-tab';
require('@4tw/cypress-drag-drop');
require('xpath_cypress');

describe('Navegar entre paginas', () => {

    it('navegate', () => {
        let time = 1000;
        cy.visit('https://200.41.78.29/legis.com.co/')
        cy.title().should('eq', 'DEMOQA')
        cy.get('.category-cards > :nth-child(1) > :nth-child(1)').should('be.visible').click({force: true})
        cy.wait(time)
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force: true})
        cy.wait(time)
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').should('be.visible').click({force: true})
        cy.go('back')
        cy.wait(time)   
        cy.go('forward')    
    })
})

/*"Text_arguments": {
		 	"prefix": "c_text_show",
		 	"body": [
		 		"cy.get('${1:texto}').should('be.visible', '$2');",
		 		"cy.wait(time)",
				""
		 	],
		 	"description": "Log output to console"
		},
	"start": {
			"prefix": "c_start",
			"body": [
				"import 'cypress-plugin-tab';",
				"require('@4tw/cypress-drag-drop');",
				"require('xpath_cypress');",
				"",	
				"describe('${1:texto}', () => {",
				"",
					"\tit('snnipets', () => {",
        			"\t\tlet time = [1000];",
        			"\t\tcy.visit('${2:url}')",
        			"\t\tcy.title('${2:argumento}').should('eq', '${2:texto}')",
        			"\t\tcy.get('${2:argumento}').should('be.visible', '${3:texto}')",
        			"\t\tcy.wait(time)"
        
    				"\t})"
				"})"
			],
			"description": "Log output to console"
	   }	

} les dejo este snippet para que lo usen*/