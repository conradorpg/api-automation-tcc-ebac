// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- Meus comandos --

import faker from "@faker-js/faker"

Cypress.Commands.add('listCoupons', () => {
  cy.request({
    method: "GET",
    url: "/wp-json/wc/v3/coupons",
    headers: {
      accept: 'application/json',
      authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
    }
  }).then((Response) => {
    expect(Response.status).to.equal(200)
    // return Response.body
  })
});

Cypress.Commands.add('registerCoupons', () => {
  cy.request({
    method: "POST",
    url: "/produtos",
    headers: { authorization: token },
    body: {
      "code": faker.commerce.productAdjective(),
      "amount": faker.commerce.price(10, 100),
      "discount_type": "fixed_product",
      "description": faker.commerce.productDescription()
    },
    failOnStatusCode: false
  })
});