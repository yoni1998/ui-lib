import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

export default {
  title: 'DropdownComponent',
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<DropdownComponent>;

const Template: Story<DropdownComponent> = (args: DropdownComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  value: '',
  inputId: '',
  width: 20,
  dropdownBackgroundColor: '',
};
