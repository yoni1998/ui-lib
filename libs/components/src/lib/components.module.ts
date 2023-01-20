import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ButtonComponent } from './button/button.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { TextareaComponent } from './textarea/textarea.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputLabelComponent } from './input-label/input-label.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextareaComponent,
      multi: true,
    },
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideHeaderComponent,
    MainContainerComponent,
    ButtonComponent,
    ModalDialogComponent,
    TextareaComponent,
    InputLabelComponent,
    DropdownComponent,
    InputFieldComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideHeaderComponent,
    MainContainerComponent,
    ButtonComponent,
    ModalDialogComponent,
    TextareaComponent,
    InputLabelComponent,
    DropdownComponent,
    InputFieldComponent,
  ],
})
export class ComponentsModule {}
