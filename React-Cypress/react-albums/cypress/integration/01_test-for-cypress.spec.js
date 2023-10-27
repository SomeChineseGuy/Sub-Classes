/* eslint-disable no-undef */
describe('Basic test for cypress', () => {
  it('Does this work?' , () => {
    expect(100).to.equal(100)
  })

  it('can go to my homepage', () => {
    cy.visit('http://localhost:8002/')
  })

})