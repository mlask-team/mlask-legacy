import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { ChecklistComponent } from './checklist.component';
import { CameleonInputComponent } from '../cameleon-input/cameleon-input.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'ChecklistComponent',
  component: ChecklistComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ChecklistComponent,
        CheckboxComponent,
        CameleonInputComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
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