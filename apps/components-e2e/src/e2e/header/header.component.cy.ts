describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=headercomponent--primary&args=appName;navigationList;logo;headerColor;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-header').should('exist');
  });
});
