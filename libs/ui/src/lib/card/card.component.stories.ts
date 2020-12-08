import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        CardComponent,
      ],
      imports: [
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
