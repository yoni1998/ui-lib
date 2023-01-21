describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=iconscomponent--primary&args=icon;title;fontsize;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-icons').should('exist');
  });
});
