import React from 'react'
import { Spacer } from '../layout'
import { Para } from '../text'
import { Panel } from './Panel'

export default {
  title: 'Surfaces/Panel'
}

export const withPilledHeaderAndOneSection = () => (
  <Panel>
    <Panel.Header>
      <Spacer>
        <Spacer row small>
          <Panel.HeaderPill active>FIRST</Panel.HeaderPill>
          <Panel.HeaderPill>SECOND</Panel.HeaderPill>
          <Panel.HeaderPill>THIRD</Panel.HeaderPill>
        </Spacer>
        <Para>
          This is the header of a panel.
        </Para>
      </Spacer>
    </Panel.Header>
    <Panel.Section>
      <Para>
          This is a section of a panel.  There can be multiple sections in a panel.
      </Para>
    </Panel.Section>
  </Panel>
)

export const withHeaderAndTwoSections = () => (
  <Panel>
    <Panel.Header>
      A HEADER SECTION
    </Panel.Header>
    <Panel.Section>
      This is the top section of a panel.
    </Panel.Section>
    <Panel.Section>
      This is the bottom section of a panel.
    </Panel.Section>
  </Panel>
)

export const withNoHeaderAndOneSection = () => (
  <Panel>
    <Panel.Section>
      This is the top section of a panel.
    </Panel.Section>
  </Panel>
)

export const withNoHeaderAndTwoSections = () => (
  <Panel>
    <Panel.Section>
      This is the top section of a panel.
    </Panel.Section>
    <Panel.Section>
      This is the bottom section of a panel.
    </Panel.Section>
  </Panel>
)
