describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=textareacomponent--primary&args=disabled;value;placeholder;maxLength;minLength;inputId;maxHeight;maxWidth;height;textAreaColor;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-textarea').should('exist');
  });
});
