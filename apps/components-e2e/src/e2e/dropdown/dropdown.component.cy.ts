describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=dropdowncomponent--primary&args=disabled:false;value;inputId;width;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-dropdown').should('exist');
  });
});
