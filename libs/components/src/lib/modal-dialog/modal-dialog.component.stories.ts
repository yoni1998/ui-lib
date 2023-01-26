import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ModalDialogComponent } from './modal-dialog.component';

export default {
  title: 'ModalDialogComponent',
  component: ModalDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ModalDialogComponent>;

const Template: Story<ModalDialogComponent> = (args: ModalDialogComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  modalTitle: '',
  modalContentText: '',
  modalButtonTitle: '',
  modalColor: '',
  width: 20,
  height: 20,
  titleColor: '',
  withButton: false,
  withIcon: false,
};
