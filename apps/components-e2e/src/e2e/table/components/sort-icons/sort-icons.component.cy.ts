describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sorticonscomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-sort-icons').should('exist');
  });
});
