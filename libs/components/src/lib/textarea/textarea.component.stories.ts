import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

export default {
  title: 'TextareaComponent',
  component: TextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TextareaComponent>;

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  value: '',
  placeholder: '',
  disabled: false,
  maxLength: 255,
  maxHeight: 50,
  minLength: 0,
  inputId: '',
  width: 20,
  height: 5,
  textAreaColor: '',
};
