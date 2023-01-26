import { ModalDialogComponent } from './modal-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePositionDirective } from './directives/title-position.directive';

@NgModule({
  declarations: [ModalDialogComponent, TitlePositionDirective],
  exports: [ModalDialogComponent],
  imports: [CommonModule],
})
export class ModalDialogModule {}
