describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dynamicformcomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-dynamic-form').should('exist');
  });
});
