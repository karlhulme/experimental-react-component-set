import React from 'react'
import { GroupedLinksView } from './GroupedLinksView'
import { builtinFieldTypes } from 'jsonotron-builtin-field-types'

export default {
  title: 'GroupedLinksView',
  component: GroupedLinksView
}

export const withFieldTypes = () => <GroupedLinksView links={builtinFieldTypes.map(ft => ({ category: ft.category, title: ft.title, url: `/field-types/${ft.name}` }))} />
export const withUndefined = () => <GroupedLinksView />
