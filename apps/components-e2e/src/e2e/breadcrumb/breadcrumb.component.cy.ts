describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=breadcrumbcomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-breadcrumb').should('exist');
  });
});
