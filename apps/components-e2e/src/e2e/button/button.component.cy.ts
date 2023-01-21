describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=buttoncomponent--primary&args=disabled;title;buttonColor;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-button').should('exist');
  });
});
