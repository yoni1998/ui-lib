describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=inputfieldcomponent--primary&args=disabled:false;readonly:false;value;inputId;placeholder;inputStyle;inputClass;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-input-field').should('exist');
  });
});
