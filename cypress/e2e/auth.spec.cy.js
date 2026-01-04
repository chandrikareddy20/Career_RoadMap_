describe('Auth Component - E2E (example)', () => {
  beforeEach(() => {
    // Adjust the path if your auth component route is not '/'
    cy.visit('/');
  });

  it('shows title and icon', () => {
    cy.get('.title h1').should('contain', 'Career Compass');
    cy.get('.icon').should('be.visible').and(($el) => {
      // Ensure icon is not tiny; value check is flexible
      expect($el.width()).to.be.greaterThan(24);
    });
  });

  it('toggles to Register and validates fields', () => {
    cy.contains('.tabs button', 'Register').click();
    cy.get('input[name="fullName"]').should('be.visible');
    cy.get('input[name="email"]').type('bad-email').blur();
    cy.contains('Please enter a valid email address.').should('be.visible');
  });

  it('enables submit with valid login credentials', () => {
    cy.contains('.tabs button', 'Login').click();
    cy.get('input[name="email"]').clear().type('test.user@example.com');
    cy.get('input[name="password"]').clear().type('Password123!');
    cy.get('button.main-btn').should('not.be.disabled');
  });
});
