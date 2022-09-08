describe('Login user', () => {
  it('valid user can login and will redirect to matches view and can logout again', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#email').type('keval@test.com');
    cy.get('#password').type('passkeval');
    cy.get('#login-btn').click();
    cy.get('.header-bar__title').should('exist');
    cy.get('#burger-menu-btn').click();
    cy.get('#logout-btn').click();
    cy.get('.splash-graphics').should('exist');
  });

  it('an invalid user should not be able to login and an error message should render', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('password');
    cy.get('#login-btn').click();
    cy.get('#error-msg').should('exist');
  });
});
