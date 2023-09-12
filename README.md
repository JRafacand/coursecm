npx cypress run --headed this command will run the test in headed mode
npx cypress run --browser chrome this command will run the test in chrome browser
npx cypress run --spec "cypress/integration/examples/actions.spec.js" this command will run the test in chrome browser and only the actions.spec.js file
npx cypress run --spec "cypress/integration/examples/*" --this command will run the test in chrome browser and all the spec to folder examples
npm install --save-dev @4tw/cypress-drag-drop