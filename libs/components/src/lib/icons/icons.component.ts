import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-lib-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  UNKNOWN_ICON = 'bx bx-question-mark';
  @Input()
  iconWithoutPrefix: string | undefined;
  @Input()
  fontsize: number | undefined;
  @Input()
  color: string | undefined;

  ngOnInit(): void {
    if (!this.iconWithoutPrefix) this.iconWithoutPrefix = this.UNKNOWN_ICON;
  }
}
