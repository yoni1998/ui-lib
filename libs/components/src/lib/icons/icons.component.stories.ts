import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IconsComponent } from './icons.component';

export default {
  title: 'IconsComponent',
  component: IconsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<IconsComponent>;

const Template: Story<IconsComponent> = (args: IconsComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  fontsize: 24,
  iconWithoutPrefix: '',
  color: '',
};
