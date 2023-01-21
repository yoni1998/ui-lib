describe('components', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=footercomponent--primary&args=footerDescription;copyRightsName;linkHeaders;linkHeaderOptions;version;footerColor;facebookSocialLink;linkedInSocialLink;instagramSocialLink;twitterSocialLink;'
    )
  );
  it('should render the component', () => {
    cy.get('ui-lib-footer').should('exist');
  });
});
