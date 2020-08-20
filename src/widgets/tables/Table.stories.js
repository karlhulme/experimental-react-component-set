import React from 'react'
import { Table } from './Table'

export default {
  title: 'Tables/Table',
  component: Table
}

export const asDefault = () => <Table />
export const withData = () => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Cell isHeader>Club</Table.Cell>
        <Table.Cell isHeader>Attendance</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Ferndown Fireflies</Table.Cell>
        <Table.Cell>1449</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bournemouth Bumblebees</Table.Cell>
        <Table.Cell>3981</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)
