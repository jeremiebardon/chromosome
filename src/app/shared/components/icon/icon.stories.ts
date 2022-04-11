import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

import { Meta, moduleMetadata, Story } from '@storybook/angular';

import IconComponent from './icon.component';

const iconDefaultValue = {
  'width.rem': 1.25,
  fill: '#fff',
};

export default {
  title: 'Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
  argTypes: {
    style: {
      description: 'A custom description for icon',
      table: {
        type: {
          summary: 'object',
          detail: '{ "width.rem": 3, "width.height": 2, "fill": "#fff" }',
        },
      },
      control: {
        type: 'object',
      },
      defaultValue: {
        'width.rem': 3,
        'width.height': 2,
        fill: '#fff',
      },
    },
  },
} as Meta;

const Template: Story = (args) => ({
  props: { ...args },
});

export const IconArchive = Template.bind({});
IconArchive.args = {
  iconUrl: '../assets/icons/archive.svg',
};
