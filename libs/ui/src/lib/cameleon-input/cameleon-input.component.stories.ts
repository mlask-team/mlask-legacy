import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { CameleonInputComponent } from './cameleon-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'CameleonInputComponent',
  component: CameleonInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [CameleonInputComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
    }),
    withKnobs
  ]
} as Meta;

const Template: Story<CameleonInputComponent> = (args) => ({
  template: `
    <mlsk-cameleon-input [value]="text" name="input-text" [placeholder]="placeholder"></mlsk-cameleon-input>
  `,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  text: text('Empty:text', ''),
  placeholder: text('Empty:placeholder', 'New item'),
};

export const Filled = Template.bind({});
Filled.args = {
  text: text('Filled:text', 'Buy grocery'),
  placeholder: text('Filled:placeholder', 'New item'),
};