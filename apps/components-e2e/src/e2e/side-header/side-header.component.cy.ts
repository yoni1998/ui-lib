describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=sideheadercomponent--primary&args=appName;navigationList;logo;sideHeaderColor;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-side-header').should('exist');
  });
});
