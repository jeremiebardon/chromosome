import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

import { Meta, moduleMetadata, Story } from '@storybook/angular';

import IconComponent from './icon.component';

export default {
  title: 'Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: { ...args },
  argTypes: {
    style: {
      control: 'object',
      default: {
        'width.rem': 1.25,
        fill: '#fff',
      },
    },
  },
});

export const IconArchive = Template.bind({});
IconArchive.args = {
  iconUrl: '../assets/icons/archive.svg',
};
