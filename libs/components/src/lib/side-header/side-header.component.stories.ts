import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SideHeaderComponent } from './side-header.component';

export default {
  title: 'SideHeaderComponent',
  component: SideHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SideHeaderComponent>;

const Template: Story<SideHeaderComponent> = (args: SideHeaderComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
