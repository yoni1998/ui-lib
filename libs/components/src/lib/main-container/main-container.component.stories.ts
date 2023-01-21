import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MainContainerComponent } from './main-container.component';

export default {
  title: 'MainContainerComponent',
  component: MainContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<MainContainerComponent>;

const Template: Story<MainContainerComponent> = (
  args: MainContainerComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  contentWrapper: false,
};
