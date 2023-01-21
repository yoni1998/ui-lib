describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fileselectcomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-file-select').should('exist');
  });
});
