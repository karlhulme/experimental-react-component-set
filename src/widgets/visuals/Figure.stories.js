import React from 'react'
import { Spacer } from '../layout'
import { Divider, Strong } from '../text'
import { Image } from './Image'
import { Figure } from './Figure'

export default {
  title: 'Visuals/Figure'
}

const penguinImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/256px-Emperor_Penguin_Manchot_empereur.jpg'

export const asDefault = () => <Figure />
export const withImageAndCaption = () => (
  <Figure>
    <Spacer small>
      <Image source={penguinImageUrl} />
      <Divider />
      <Figure.Caption>Emporer <Strong>penguin</Strong> stood on snow</Figure.Caption>
    </Spacer>
  </Figure>
)
export const withFilledImageAndCaption = () => (
  <Figure>
    <Spacer small>
      <Image fill={30} source={penguinImageUrl} />
      <Divider />
      <Figure.Caption>Emporer <Strong>penguin</Strong> stood on snow</Figure.Caption>
    </Spacer>
  </Figure>
)
