import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SortIconsComponent } from './sort-icons.component';

export default {
  title: 'SortIconsComponent',
  component: SortIconsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SortIconsComponent>;

const Template: Story<SortIconsComponent> = (args: SortIconsComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
