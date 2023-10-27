/* eslint-disable no-undef */

describe('Tests for the input field', ()=> {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Can type into the input and find a result', () => {
    cy.get('.search__form input').type('Blink 182').should("have.value", "Blink 182")
    cy.get('.album')
      .first()
      .children(".album__info")
      .children('.album__name')
      
  })
})