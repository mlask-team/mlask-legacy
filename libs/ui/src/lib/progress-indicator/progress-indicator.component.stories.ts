import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { ProgressIndicatorComponent } from './progress-indicator.component';

export default {
  title: 'ProgressIndicatorComponent',
  component: ProgressIndicatorComponent,
  decorators: [
    moduleMetadata({
      declarations: [
      ],
      imports: [
      ],
    }),
    withKnobs,
  ]
} as Meta;

const Template: Story<ProgressIndicatorComponent> = (args) => ({
  component: ProgressIndicatorComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
