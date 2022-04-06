import { Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';

import ButtonComponent from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [withDesign],
  argTypes: {
    type: {
      control: { type: 'select' },
      defaultValue: 'primary',
    },
    size: {
      defaultValue: 'large',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PKxRhHKYtM72sBDof6CSgV/Silicon-Design-System-(Community)?node-id=2403%3A10492',
    },
  },
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
    onClick: action('onClick'),
  },
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  type: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary',
  type: 'tertiary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Ghost',
  type: 'ghost',
};
