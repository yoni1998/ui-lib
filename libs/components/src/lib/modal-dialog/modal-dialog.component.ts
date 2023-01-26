import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-lib-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent implements OnInit {
  @Input() modalTitle: string | undefined;
  @Input() modalContentText: string | undefined;
  @Input() modalButtonTitle: string | undefined;
  @Input() modalColor: string | undefined;
  @Input() width: number | undefined;
  @Input() height: number | undefined;
  @Input() titleColor: string | undefined;
  @Input() withIcon: boolean | undefined;
  @Input() withButton: boolean | undefined;

  private element: any;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }
  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal');
  }

  open(): void {
    document.body.classList.add('modal');
  }

  openModal() {
    this.open();
  }

  closeModal() {
    this.close();
  }

  ngOnInit() {
    if (this.withButton && this.withIcon) {
      console.error('You need to choose between the icon and the button.');
    }
  }
}
