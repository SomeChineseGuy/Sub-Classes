/* eslint-disable no-undef */

describe('test for checkboxes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8002/')
  })

  it('can uncheck Explicit ' , () => {
    cy.get('#Explicit').uncheck().should('not.be.checked')
  })

  it('can check the EP checkbox', () => {
    cy.get('#EP').click().should('be.checked')
  })
})