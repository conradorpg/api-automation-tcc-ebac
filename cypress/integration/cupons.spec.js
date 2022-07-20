/// <reference types="cypress" />

import faker from "@faker-js/faker"
const info = require('../fixtures/info.json')

describe('Testes com a API EBAC-Shop - Cupons', () => {

  it('Listar Cupons', () => {
    cy.request({
      method: "GET",
      url: "/wc/v3/coupons",
      headers: {
        accept: info.accept,
        authorization: info.authorization
      }
    }).then((Response) => {
      expect(Response.status).to.equal(200)
      // expect(Response.body[0].id).to.equal(6332)
      cy.get(Response.body[0].id)
    })
  });

  it.only('Listar Cupom por Id', () => {
    cy.registerCoupons()
      .then(Response => {
        let cupomId = Response.body.id
        cy.request({
          method: "GET",
          url: `/wc/v3/coupons/${cupomId}`,
          headers: {
            accept: info.accept,
            authorization: info.authorization
          }
        }).then((Response) => {
          expect(Response.status).to.equal(200)
        })
      })
  });

  it('Cadastrar Cupons', () => {
    cy.request({
      method: "POST",
      url: "/wc/v3/coupons",
      headers: {
        accept: info.accept,
        authorization: info.authorization
      },
      body: {
        "code": faker.random.numeric(4),
        "amount": faker.commerce.price(10, 100),
        "discount_type": "fixed_product",
        "description": faker.commerce.productDescription()
      },
    }).then((Response) => {
      expect(Response.status).to.equal(201)
    })
  });

})