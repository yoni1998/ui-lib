import { Component, Input, OnInit } from '@angular/core';
import { IconType } from './icons.type';

const UNKNOWN_ICON: IconType = {
  icon: 'fa-question-circle-o fa-spin',
  label: 'Niet bekend',
};

@Component({
  selector: 'ui-lib-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  @Input()
  icon: IconType | undefined;
  @Input()
  title: string | undefined;
  @Input()
  fontsize: number | undefined;

  ngOnInit(): void {
    if (!this.icon) this.icon = UNKNOWN_ICON;
  }
}
