import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TableBodyComponent } from './table-body.component';

export default {
  title: 'TableBodyComponent',
  component: TableBodyComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TableBodyComponent>;

const Template: Story<TableBodyComponent> = (args: TableBodyComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
