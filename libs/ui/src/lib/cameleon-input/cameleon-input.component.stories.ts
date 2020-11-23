import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { CameleonInputComponent } from './cameleon-input.component';

export default {
  title: 'CameleonInputComponent',
  component: CameleonInputComponent,
  decorators: [
    withKnobs
  ]
} as Meta;

const Template: Story<CameleonInputComponent> = (args) => ({
  component: CameleonInputComponent,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  text: text('text', ''),
  placeholder: text('placeholder', 'New item'),
};

export const Filled = Template.bind({});
Filled.args = {
  text: text('text', 'Buy grocery'),
  placeholder: text('placeholder', 'New item'),
};