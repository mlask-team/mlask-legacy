import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ChecklistItemComponent } from './checklist-item.component';

export default {
  title: 'ChecklistItemComponent',
  component: ChecklistItemComponent,
  decorators: [
    withKnobs
  ]

} as Meta;

const Template: Story<ChecklistItemComponent> = (args) => ({
  component: ChecklistItemComponent,
  props: args,
});

export const YourStory = Template.bind({});
YourStory.args = {
  text: text('YourStory:text', 'CHECKLIST ITEM')
};