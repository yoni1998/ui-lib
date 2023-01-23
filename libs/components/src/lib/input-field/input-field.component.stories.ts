import { IconsComponent } from './../icons/icons.component';
import { InputLabelComponent } from './../input-label/input-label.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InputFieldComponent } from './input-field.component';

export default {
  title: 'InputFieldComponent',
  component: InputFieldComponent,
  InputLabelComponent,
  IconsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<InputFieldComponent>;

const Template: Story<InputFieldComponent> = (args: InputFieldComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  readonly: false,
  placeholder: '',
  inputWidth: '',
  inputHeight: '',
  inputBorder: '',
  inputBorderRadius: '',
  inputIconColor: '',
  inputIconClassNameWithoutPrefix: '',
  inputType: '',
  inputId: '',
  inputClass: '',
};
