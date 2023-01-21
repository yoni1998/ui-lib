describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tabscomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-tabs').should('exist');
  });
});
