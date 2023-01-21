describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=tableheadercomponent--primary&args=title;subtitle;numberOfCheckedItems;actions;checkedItems;columns;tableRef;exportId;dataKey;list;id;fullscreen;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-table-header').should('exist');
  });
});
