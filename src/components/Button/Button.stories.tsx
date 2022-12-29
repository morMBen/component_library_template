import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Hola = Template.bind({});

Hola.args = { label: 'Hola' };

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!',
};
