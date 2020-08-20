import React, { useState } from 'react'
import { Columns, Spacer } from '../layout'
import { Box, Panel } from '../surfaces'

export default {
  title: 'Surfaces/_Showcase'
}

function ShowCaseExample () {
  const [selectedPillIndex, setSelectedPillIndex] = useState(0)

  return (
    <Columns>
      <Columns.LeftHalf>
        <Spacer>
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
        </Spacer>
      </Columns.LeftHalf>
      <Columns.RightHalf>
        <Spacer>
          <Panel>
            <Panel.Header>
              <Spacer row small>
                <Panel.HeaderPill active={selectedPillIndex === 0} value={0} onSelect={() => setSelectedPillIndex(0)}>FIRST</Panel.HeaderPill>
                <Panel.HeaderPill active={selectedPillIndex === 1} value={1} onSelect={() => setSelectedPillIndex(1)}>SECOND</Panel.HeaderPill>
                <Panel.HeaderPill active={selectedPillIndex === 2} value={2} onSelect={() => setSelectedPillIndex(2)}>THIRD</Panel.HeaderPill>
              </Spacer>
            </Panel.Header>
            {selectedPillIndex === 0 &&
              <Panel.Section>
                This text is part of the first section.
              </Panel.Section>}
            {selectedPillIndex === 1 &&
              <Panel.Section>
                Where as this text is part of the second section.
              </Panel.Section>}
            {selectedPillIndex === 2 &&
              <Panel.Section>
                And finally this text is part of the third section.
              </Panel.Section>}
          </Panel>
          <Box system>
            This is a system box.
          </Box>
          <Box hint>
            This is a hint box.
          </Box>
          <Box alert>
            This is an alert box.
          </Box>
        </Spacer>
      </Columns.RightHalf>
    </Columns>
  )
}

export const allWidgets = () => <ShowCaseExample />
