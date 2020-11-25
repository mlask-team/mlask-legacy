import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ChecklistComponent } from './checklist.component';
import { CameleonInputComponent } from '../cameleon-input/cameleon-input.component';
import { ChecklistItemComponent } from '../checklist-item/checklist-item.component';

export default {
  title: 'ChecklistComponent',
  component: ChecklistComponent,
  decorators: [
    moduleMetadata({
      declarations: [ChecklistComponent, ChecklistItemComponent, CameleonInputComponent],
    }),
    withKnobs,
  ]
} as Meta;

const Template: Story<ChecklistComponent> = (args) => ({
  component: ChecklistComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};