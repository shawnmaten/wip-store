import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '../components/popover'

export default {
  title: 'Radix/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover  {...args} >
    <PopoverTrigger>...</PopoverTrigger>
    <PopoverContent>...</PopoverContent>
  </Popover>
);

export const Primary = Template.bind({});
Primary.args = {};
