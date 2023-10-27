/* eslint-disable no-undef */

describe('offline testing', () => {
  it('can search for a value offline', () => {
    cy.visit('/');

    cy.intercept("GET", "**/search*", {fixture: 'itunes'})
    cy.get('.search__form').find('input').type('Daft Punk')

    cy.contains("Random Access Memories")

    cy.get('article.album').should('not.contain', "Something cool")

  })
})