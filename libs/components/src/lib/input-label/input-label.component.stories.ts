import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InputLabelComponent } from './input-label.component';

export default {
  title: 'InputLabelComponent',
  component: InputLabelComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<InputLabelComponent>;

const Template: Story<InputLabelComponent> = (args: InputLabelComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: '',
};
