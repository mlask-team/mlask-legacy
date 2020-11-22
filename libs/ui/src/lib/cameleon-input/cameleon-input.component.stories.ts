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

export const YourStory = Template.bind({});
YourStory.args = {
  text: text('text', 'TODO ITEM')
};