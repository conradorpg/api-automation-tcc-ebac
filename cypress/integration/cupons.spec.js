/// <reference types="cypress" />
import faker from "@faker-js/faker"

describe('Testes com a API EBAC-Shop - Cupons', () => {

  it('Listar Cupons', () => {
    cy.request({
      method: "GET",
      url: "/wp-json/wc/v3/coupons",
      headers: {
        accept: 'application/json',
        authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
      }
    }).then((Response) => {
      cy.log(Response.body)
      expect(Response.status).to.equal(200)
    })
  });

  it('Cadastrar Cupons', () => {
    cy.request({
      method: "POST",
      url: "/produtos",
      headers: {
        accept: 'application/json',
        authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
      },
      body: {
        "code": faker.commerce.productAdjective(),
        "amount": faker.commerce.price(10, 100),
        "discount_type": "fixed_product",
        "description": faker.commerce.productDescription()
      },
    }).then((Response) => {
      const obj = cy.log(Response.body)
      expect(Response.status).to.equal(200)
      return obj
    })
  });

})