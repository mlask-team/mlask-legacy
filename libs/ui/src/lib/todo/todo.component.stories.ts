import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { TodoComponent } from './todo.component';

export default {
  title: 'TodoComponent',
  component: TodoComponent,
  decorators: [
    withKnobs
  ]

} as Meta;

const Template: Story<TodoComponent> = (args) => ({
  component: TodoComponent,
  props: args,
});

export const YourStory = Template.bind({});
YourStory.args = {
  text: text('text', 'TODO ITEM')
};