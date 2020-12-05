import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { CameleonInputComponent } from '../cameleon-input/cameleon-input.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChecklistComponent } from '../checklist/checklist.component';
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        CardComponent,
        ChecklistComponent,
        CheckboxComponent,
        CameleonInputComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
      ],
    }),
    withKnobs,
  ]
} as Meta;

const Template: Story<CardComponent> = (args) => ({
  template: `
    <mlsk-card>
      <h1>Header</h1>
      <ul>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
    </mlsk-card>
  `,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
};
