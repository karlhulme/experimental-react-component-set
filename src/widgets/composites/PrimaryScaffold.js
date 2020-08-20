import React from 'react'
import { Form } from '../nonVisuals'
import { Spacer, Structure } from '../layout'
import { MainMenu } from '../menus'
import { DarkMode, Paper } from '../surfaces'

export function PrimaryScaffold ({ children, darkMode, setDarkMode }) {
  return (
    <Form>
      <DarkMode enabled={darkMode}>
        <Paper>
          <Structure>
            <Structure.Header>
              <MainMenu darkMode={darkMode} onChangeDarkMode={e => setDarkMode(e.target.checked)} />
            </Structure.Header>
            <Structure.Main>
              <Spacer large>
                {children}
              </Spacer>
            </Structure.Main>
          </Structure>
        </Paper>
      </DarkMode>
    </Form>
  )
}
