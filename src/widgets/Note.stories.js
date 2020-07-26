import React from 'react'
import { Note } from './Note'

export default {
  title: 'Note',
  component: Note
}

export const withUndefined = () => <Note />
export const withText = () => <Note>This is some text</Note>
export const withDivs = () => <Note><div>This is line one.</div><div>This is line two.</div></Note>
