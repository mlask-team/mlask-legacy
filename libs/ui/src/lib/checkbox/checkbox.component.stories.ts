import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { CheckboxComponent } from './checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'CheckboxComponent',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        CheckboxComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
    }),
    withKnobs,
  ]
} as Meta;

const Template: Story<CheckboxComponent> = (args) => ({
  component: CheckboxComponent,
  props: args,
});

export const Checked = Template.bind({});
Checked.args = {
  value: boolean('Checked:value', true),
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  value: boolean('Unchecked:value', false),
};