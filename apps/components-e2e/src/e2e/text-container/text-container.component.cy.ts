describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=textcontainercomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-text-container').should('exist');
  });
});
