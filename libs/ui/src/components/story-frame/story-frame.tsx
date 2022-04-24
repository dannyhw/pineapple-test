import React from 'react'

import { View } from 'native-base'

/* eslint-disable-next-line */
export interface StoryProps extends React.PropsWithChildren<unknown> {}

export function StoryFrame(props: StoryProps) {
  return <View p="6">{props.children}</View>
}

export default StoryFrame

export const StoryFrameDecorator = (
  Story: React.JSXElementConstructor<unknown>
) => (
  <StoryFrame>
    <Story />
  </StoryFrame>
)
