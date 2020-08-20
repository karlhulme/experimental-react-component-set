import React from 'react'
import { Tag } from './Tag'

export default {
  title: 'Visuals/Tag'
}

export const asDefault = () => <Tag />
export const deprecatedTag = () => <Tag deprecated />
export const patchableTag = () => <Tag patchable />
export const requiredTag = () => <Tag required />
export const calculatedTag = () => <Tag calculated />
