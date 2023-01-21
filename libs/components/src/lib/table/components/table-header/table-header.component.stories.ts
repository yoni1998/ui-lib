import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TableHeaderComponent } from './table-header.component';

export default {
  title: 'TableHeaderComponent',
  component: TableHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TableHeaderComponent>;

const Template: Story<TableHeaderComponent> = (args: TableHeaderComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  numberOfCheckedItems: 0,
};
