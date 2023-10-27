describe('More search Testing', () => {
  it('Can find Tone Stith', () => {
    cy.visit('/')
    cy.get('.search__form input').type("Tone Stith", {delay: 200}).should('have.value', "Tone Stith")
    cy.get("#Single").check();
    cy.get("#EP").check();
  })
  it('Can find Daft Punk', () => {
    cy.visit('/')
    cy.get('.search__form input').type("Daft Punk", {delay: 200}).should('have.value', "Daft Punk")
    cy.get("#Single").check();
    cy.get("#EP").check();
  })
})