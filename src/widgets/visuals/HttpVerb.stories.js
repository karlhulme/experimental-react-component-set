import React from 'react'
import { HttpVerb } from './HttpVerb'

export default {
  title: 'Visuals/HttpVerb'
}

export const asDefault = () => <HttpVerb />
export const getVerb = () => <HttpVerb get />
export const postVerb = () => <HttpVerb post />
export const patchVerb = () => <HttpVerb patch />
export const deleteVerb = () => <HttpVerb delete />
export const putVerb = () => <HttpVerb put />
