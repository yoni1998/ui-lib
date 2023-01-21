describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=datepickercomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-lib-date-picker').should('exist');
  });
});
