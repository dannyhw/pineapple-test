import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, IButtonProps } from 'native-base'
import { StoryFrameDecorator } from '../story-frame/story-frame'

export default {
  component: Button,
  title: 'Button',
  decorators: [StoryFrameDecorator],
} as Meta

const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'This is a Button',
}
