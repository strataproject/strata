/// <reference types="Cypress" />
describe('Accessibility checks', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
    cy.wait(2000)
  })
  it('Has no detectable a11y violations on load', () => {
    cy.checkA11y()
  })
})
