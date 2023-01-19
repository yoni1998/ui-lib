import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent {
  @Input() modalTitle: string | undefined;
  @Input() modalContent: string | undefined;
  @Input() modalButtonTitle: string | undefined;
  @Input() modalColor: string | undefined;
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
    this.element.style.backgroundColor = 'red';
    document.body.classList.add('modal');
  }

  openModal() {
    this.open();
  }

  closeModal() {
    this.close();
  }
}
