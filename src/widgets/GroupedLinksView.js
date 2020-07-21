import React from 'react'
import { InlineLink } from './InlineLink'
import { SubHeading } from './SubHeading'
import { VSpacer } from './VSpacer'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

`

const Section = styled.div`
  flex-basis: 15rem;
`

/**
 * Returns a list of the unique categories referenced on the given links.
 * @param {Array} links An array of links, each one with a category property.
 */
function determineUniqueCategories (links) {
  const result = []

  links.forEach(link => {
    if (!result.includes(link.category)) {
      result.push(link.category)
    }
  })

  return result.sort((a, b) => a.localeCompare(b))
}

/**
 * A set of links grouped into categories.
 * @param {Object} props A property bag.
 * @param {Array} props.links An array of links.
 * @param {String} props.links.category The category of a link.
 * @param {String} props.links.title The display text of a link.
 * @param {String} props.links.url The url of a link.
 */
export function GroupedLinksView ({ links = [] }) {
  const sections = []
  const categories = determineUniqueCategories(links)
  const sortedLinks = links.sort((a, b) => a.title.localeCompare(b.title))

  categories.forEach(category => {
    sections.push(
      <Section key={category}>
        <SubHeading text={category} />
        <VSpacer size={0.5} />
        {sortedLinks.filter(link => link.category === category).map(link => (
          <div key={link.title}>
            <InlineLink text={link.title} url={link.url} />
          </div>
        ))}
      </Section>
    )
  })

  return <Container>{sections}</Container>
}
