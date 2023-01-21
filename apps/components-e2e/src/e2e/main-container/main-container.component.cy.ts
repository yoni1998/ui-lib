describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=maincontainercomponent--primary&args=contentWrapper:false;containerColor;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-main-container').should('exist');
  });
});
