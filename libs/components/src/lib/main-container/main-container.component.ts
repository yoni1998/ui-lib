import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ui-lib-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  @Input()
  public contentWrapper = false;
  containerClass: string | undefined;
  @Input() containerColor: string | undefined;

  ngOnInit() {
    this.updateContainerClass();
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    this.updateContainerClass();
  }

  private updateContainerClass() {
    this.containerClass = this.contentWrapper ? 'content-wrapper' : 'content';
  }
}
