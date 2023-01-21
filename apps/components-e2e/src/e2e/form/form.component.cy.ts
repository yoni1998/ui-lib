describe('components', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=formcomponent--primary&args=formGroup;errorMap;')
  );
  it('should render the component', () => {
    cy.get('ui-lib-form').should('exist');
  });
});
