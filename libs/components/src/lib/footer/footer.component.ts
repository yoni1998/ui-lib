import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() footerDescription: string | undefined;
  @Input() copyRightsName: string | undefined;
  @Input() linkHeaders: string[] | undefined;
  @Input() linkHeaderOptions: string[] | undefined;
  @Input() version: string | undefined;
  @Input() footerColor: string | undefined;

  // social links here
  @Input() facebookSocialLink: string | undefined;
  @Input() linkedInSocialLink: string | undefined;
  @Input() instagramSocialLink: string | undefined;
  @Input() twitterSocialLink: string | undefined;
}
