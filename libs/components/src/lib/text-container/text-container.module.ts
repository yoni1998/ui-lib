import { TextContainerComponent } from './text-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TextContainerComponent],
  exports: [TextContainerComponent],
  imports: [CommonModule],
})
export class TextContainerModule {}
