import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'ui-lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string | undefined;
  @Input()
  disabled: boolean | undefined;
  @Input()
  title: string | undefined;
  @Input() color: string | undefined;
  @Input() textColor: string | undefined;
  @Input() borderStyle: string | undefined;
  @Input() width: number | undefined;
  @Input() height: number | undefined;
  @Input() borderRadius: number | undefined;
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.buttonTypeCheck();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (this.title!.length >= 10) {
      console.error('title must not be greater than 10 characters');
    }
  }
  buttonTypeCheck(): void {
    if (
      this.type === 'submit' ||
      this.type === 'reset' ||
      this.type === 'button' ||
      !this.type
    ) {
      console.log('Type input: ' + this.type);
    } else {
      console.error('Invalid input type for button.');
    }
  }
}
