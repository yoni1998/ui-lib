describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-card').should('exist');
  });
});
