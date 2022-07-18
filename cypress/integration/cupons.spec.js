/// <reference types="cypress" />
import faker from "@faker-js/faker"
import { number } from "joi";

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
      expect(Response.status).to.equal(200)
      return Response.body.id
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
      expect(Response.status).to.equal(200)
      return Response.body.id
    })
  });

})