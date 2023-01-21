describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tablebodycomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-table-body').should('exist');
  });
});
