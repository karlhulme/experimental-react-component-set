import React from 'react'
import { Spacer } from '../layout'
import { Para } from '../text'
import { Box } from './Box'

export default {
  title: 'Surfaces/Box',
  component: Box
}

export const asDefault = () => <Box />
export const asDefaultWithText = () => <Box>Some text in a box with no type.</Box>
export const asSystemBoxWithPara = () => <Box system><Para>This is a box that highlights some text to the reader.  The contents could refer to any topic and should be of some note to the reader.</Para></Box>
export const asHintBoxWithPara = () => <Box hint><Para>This is a box that contains text.  It could be a information about one thing or information about another.</Para></Box>
export const asAlertBoxWithMultipleParas = () => <Box alert><Spacer><Para>This is the first paragraph inside the box.</Para><Para>This is the second paragraph.  It is also inside the box and will stand out to the reader in some way.</Para></Spacer></Box>
