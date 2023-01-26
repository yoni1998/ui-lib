import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TextContainerComponent } from './text-container.component';

export default {
  title: 'TextContainerComponent',
  component: TextContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TextContainerComponent>;

const Template: Story<TextContainerComponent> = (
  args: TextContainerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: '',
  containerPosition: '',
  containerColor: '',
  titleColor: '',
  textColor: '',
  width: 35,
  height: 10,
};
