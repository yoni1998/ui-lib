describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=inputlabelcomponent--primary&args=label;labelClass;disabled:false;readonly:false;value;inputId;placeholder;max;min;wheelStep;inputStyle;inputClass;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-input-label').should('exist');
  });
});
