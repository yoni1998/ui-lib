describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=modaldialogcomponent--primary&args=modalTitle;modalContent;modalButtonTitle;modalColor;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-modal-dialog').should('exist');
  });
});
