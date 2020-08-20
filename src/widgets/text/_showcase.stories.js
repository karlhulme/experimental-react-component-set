import React from 'react'
import { Spacer } from '../layout'
import {
  Abstract, BlockQuote, Br, Code, CodeHeading, Del, Divider, Em,
  Heading, List, MinorHeading, Para, Pre, Strong, SubHeading, Title
} from '../text'

export default {
  title: 'Text/_Showcase'
}

function ShowCaseExample () {
  return (
    <Spacer large>
      <Title>This is a page title (h1)</Title>
      <Abstract>This is an abstract</Abstract>
      <Heading>This is a heading (h2)</Heading>
      <SubHeading>This is a sub-heading (h3)</SubHeading>
      <MinorHeading>This is a minor heading (h4)</MinorHeading>
      <CodeHeading>This is a code heading (h5)</CodeHeading>
      <Para>This is a normal paragraph.  This is what the majority of the text will look like.</Para>
      <Divider />
      <Para>And then even more regular text after a divider.</Para>
      <BlockQuote>This is a block quote that tells you something a person once said.</BlockQuote>
      <Para>This is some text with a line break...<Br />...that then continues.</Para>
      <Para>Here is some text that has been <Del>deleted</Del> from the paragraph.</Para>
      <Para>Sometimes you need <Strong>Strong Text</Strong> to make an important point.</Para>
      <Para>Otherwise a bit of <Em>Emphasis</Em> may be enough.</Para>
      <Para>This line contains a <Code>keyword</Code> that means something in a computer language.</Para>
      <Pre>This text   is pre formatted with extra    spaces.  It also contains...{'\n'}line-{'\n'}breaks.</Pre>
      <Divider />
      <Para>This is an ordered list.</Para>
      <List ordered>
        <List.Item>Apples</List.Item>
        <List.Item>Bananas</List.Item>
        <List.Item>Pears</List.Item>
      </List>
      <Para>This is an unordered list.</Para>
      <List>
        <List.Item>Potatoes</List.Item>
        <List.Item>Tomatoes</List.Item>
        <List.Item>Asparagus</List.Item>
      </List>
    </Spacer>
  )
}

export const allWidgets = () => <ShowCaseExample />
