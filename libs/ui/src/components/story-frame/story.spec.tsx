import React from 'react'
import { render } from '@testing-library/react-native'

import Story from './story-frame'

describe('Story', () => {
  it('should render successfully', () => {
    const { container } = render(<Story />)
    expect(container).toBeTruthy()
  })
})
