import React from 'react'
import { InlineLink } from './InlineLink'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;

`

const LinkBlock = styled.div`
  flex-basis: 15rem;
`

/**
 * A set of links sorted alphabetically and displayed in a flex grid.
 * @param {Object} props A property bag.
 * @param {Array} props.links An array of links.
 * @param {String} props.links.title The display text of a link.
 * @param {String} props.links.url The url of a link.
 */
export function LinkCollection ({ links = [] }) {
  const sortedLinks = links.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <Container>
      {sortedLinks.map(l => (
        <LinkBlock key={l.title}>
          <InlineLink text={l.title} url={l.url} />
        </LinkBlock>
      ))}
    </Container>
  )
}
