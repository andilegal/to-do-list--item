import React from 'react'
import { TableBodyRow } from './table-body-row'
import { TableBodyCell } from './table-body-cell'

type TableBodyProps = {
  children: React.ReactNode
}

export function TableBody({ children }: TableBodyProps) {
  return <tbody>{children}</tbody>
}

TableBody.Row = TableBodyRow
TableBody.Cell = TableBodyCell
