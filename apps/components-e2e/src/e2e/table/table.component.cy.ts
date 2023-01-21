describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=tablecomponent--primary&args=columns;dataList;isAction:false;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-table').should('exist');
  });
});
