import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FileSelectComponent } from './file-select.component';

export default {
  title: 'FileSelectComponent',
  component: FileSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FileSelectComponent>;

const Template: Story<FileSelectComponent> = (args: FileSelectComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
