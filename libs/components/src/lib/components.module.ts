import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideHeaderComponent } from './side-header/side-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, SideHeaderComponent],
  exports: [HeaderComponent, FooterComponent, SideHeaderComponent],
})
export class ComponentsModule {}
