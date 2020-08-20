import React from 'react'

export function Table ({ children }) {
  return <table className='table-wrapper'>{children}</table>
}

Table.Head = function ({ children }) {
  return <thead className='table-head'>{children}</thead>
}

Table.Body = function ({ children }) {
  return <tbody className='table-body'>{children}</tbody>
}

Table.Row = function ({ children, isHeader }) {
  return <tr className={`table-row ${isHeader ? 'table-row-header' : ''} `}>{children}</tr>
}

Table.Cell = function ({ children, isHeader }) {
  return isHeader
    ? <th className='table-cell table-cell-header'>{children}</th>
    : <td className='table-cell'>{children}</td>
}
