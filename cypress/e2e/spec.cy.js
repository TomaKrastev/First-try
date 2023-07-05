describe('Test BX Onboarding', () => {
  it ('Opens the BX Site', () => {
    cy.visit(`https://assets.apps.horizonint.cloud/#/login`);
    cy.get('[data-cy="login-auth-login-button"]').click();
    cy.origin(`https://login-qa.siemens.com`, () => {
    cy.get(`input[name="email"]`).type(`toma.krastev@siemens.com`);
    cy.get('.auth0-label-submit').click();
    })
    
    
  })
})