import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ChecklistItemComponent } from './checklist-item.component';
import { CameleonInputComponent } from '../cameleon-input/cameleon-input.component';

export default {
  title: 'ChecklistItemComponent',
  component: ChecklistItemComponent,
  decorators: [
    moduleMetadata({
      declarations: [ChecklistItemComponent, CameleonInputComponent],
    }),
    withKnobs,
  ]
} as Meta;

const Template: Story<ChecklistItemComponent> = (args) => ({
  component: ChecklistItemComponent,
  props: args,
});

export const Filled = Template.bind({});
Filled.args = {
  text: text('Filled:text', 'Buy grocery'),
};