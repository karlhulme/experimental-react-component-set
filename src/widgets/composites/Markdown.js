import React from 'react'
import marked from 'marked'
import { Spacer } from '../layout'
import {
  BlockQuote, Br, Code, Del, Divider, Em, Keyword,
  Link, List, MinorHeading, Para, Pre, Strong
} from '../text'
import { Panel } from '../surfaces'
import { Image, JsonView, Figure } from '../visuals'
import { Table } from '../tables'

function safeParse (json) {
  try {
    return JSON.parse(json)
  } catch {
    return { error: 'supplied string was not valid json: ' + json }
  }
}

function renderTokens (tokens) {
  return tokens.map((token, index) => render(token, index))
}

function render (tokenSpec, key = 0) {
  switch (tokenSpec.type) {
    case 'code': {
      return tokenSpec.lang === 'json'
        ? <Panel key={key}><Panel.Section><JsonView obj={safeParse(tokenSpec.text)} showLineNumbers /></Panel.Section></Panel>
        : <Panel key={key}><Panel.Section><Pre><Code>{tokenSpec.text}</Code></Pre></Panel.Section></Panel>
    }
    case 'blockquote': { return <BlockQuote key={key}>{renderTokens(tokenSpec.tokens)}</BlockQuote> }
    case 'heading': { return <MinorHeading key={key}>{renderTokens(tokenSpec.tokens)}</MinorHeading> }
    case 'hr': { return <Divider key={key} /> }
    case 'list': {
      return tokenSpec.ordered
        ? <List ordered key={key}>{tokenSpec.items.map((item, index) => render(item, index))}</List>
        : <List key={key}>{tokenSpec.items.map((item, index) => render(item, index))}</List>
    }
    case 'list_item': { return <List.Item key={key}>{renderTokens(tokenSpec.tokens)}</List.Item> }
    case 'paragraph': { return <Para key={key}>{renderTokens(tokenSpec.tokens)}</Para> }
    case 'table': {
      return (
        <Table key={key}>
          <Table.Head>
            <Table.Row isHeader>
              {tokenSpec.tokens.header.map((hArray, index) => <Table.Cell key={index} isHeader>{hArray.map(h => render(h))}</Table.Cell>)}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {tokenSpec.tokens.cells.map((row, rowIndex) => (
              <Table.Row key={rowIndex}>
                {row.map((cArray, index) => <Table.Cell key={index}>{cArray.map(c => render(c))}</Table.Cell>)}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )
    }

    case 'strong': { return <Strong key={key}>{renderTokens(tokenSpec.tokens)}</Strong> }
    case 'em': { return <Em key={key}>{renderTokens(tokenSpec.tokens)}</Em> }
    case 'codespan': { return <Keyword key={key}>{tokenSpec.text}</Keyword> }
    case 'br': { return <Br /> }
    case 'del': { return <Del key={key}>{renderTokens(tokenSpec.tokens)}</Del> }
    case 'link': { return <Link key={key} to={tokenSpec.href}>{tokenSpec.title}</Link> }
    case 'image': {
      return tokenSpec.title
        ? <Figure key={key}><Spacer small><Image alt={tokenSpec.alt} source={tokenSpec.href} /><Divider /><Figure.Caption>{tokenSpec.title}</Figure.Caption></Spacer></Figure>
        : <Image key={key} alt={tokenSpec.alt} source={tokenSpec.href} />
    }
    case 'text': { return tokenSpec.raw }
    default: { return null }
  }
}

export function Markdown ({ source = '' }) {
  const tokens = marked.lexer(source)
  return <>{renderTokens(tokens)}</>
}
