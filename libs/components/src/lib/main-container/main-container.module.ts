import { MainContainerComponent } from './main-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainContainerComponent],
  exports: [MainContainerComponent],
  imports: [CommonModule],
})
export class MainContainerModule {}
