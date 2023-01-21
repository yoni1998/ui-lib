describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=errormessagecomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-error-message').should('exist');
  });
});
