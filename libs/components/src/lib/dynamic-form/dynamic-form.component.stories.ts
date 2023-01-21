import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DynamicFormComponent } from './dynamic-form.component';

export default {
  title: 'DynamicFormComponent',
  component: DynamicFormComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<DynamicFormComponent>;

const Template: Story<DynamicFormComponent> = (args: DynamicFormComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
