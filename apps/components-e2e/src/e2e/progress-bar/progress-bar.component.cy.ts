describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=progressbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-progress-bar').should('exist');
  });
});
