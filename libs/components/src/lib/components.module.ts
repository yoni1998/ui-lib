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
import { TableComponent } from './table/table.component';
import { IconsComponent } from './icons/icons.component';
import { TableHeaderComponent } from './table/components/table-header/table-header.component';
import { TableBodyComponent } from './table/components/table-body/table-body.component';
import { SortIconsComponent } from './table/components/sort-icons/sort-icons.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CardComponent } from './card/card.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FileSelectComponent } from './file-select/file-select.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TextContainerComponent } from './text-container/text-container.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
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
    TableComponent,
    IconsComponent,
    TableHeaderComponent,
    TableBodyComponent,
    SortIconsComponent,
    FormComponent,
    BreadcrumbComponent,
    CardComponent,
    DatePickerComponent,
    ErrorMessageComponent,
    FileSelectComponent,
    ProgressBarComponent,
    TabsComponent,
    TextContainerComponent,
    DynamicFormComponent,
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
    TableComponent,
    IconsComponent,
    FormComponent,
    BreadcrumbComponent,
    CardComponent,
    DatePickerComponent,
    ErrorMessageComponent,
    FileSelectComponent,
    ProgressBarComponent,
    TabsComponent,
    TextContainerComponent,
  ],
})
export class ComponentsModule {}
