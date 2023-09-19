1. Comands
    npx cypress run --headed this command will run the test in headed mode
    npx cypress run --browser chrome this command will run the test in chrome browser
    npx cypress run --spec "cypress/integration/examples/actions.spec.js" this command will run the test in chrome browser and only the actions.spec.js file
    npx cypress run --spec "cypress/integration/examples/*" --this command will run the test in chrome browser and all the spec to folder examples
    npm install --save-dev @4tw/cypress-drag-drop
2. Selector
    css #userName[type='text'] - Attribute
    xpath //button[@type='button'] - Attribute
    xpath //input[@id='userName' and @type='text'] in this case we are using two attributes with AND, we can use OR
    xpath //div[text()='Text Box'] we can use **div** after attribute text() to find the element by text
    xpath //span[text()='Check Box'] we can use **span** after attribute text() to find the element by text
    xpath //span[contains(text(),'Check')] we can usea **contains** after attribute text() to find the element by text