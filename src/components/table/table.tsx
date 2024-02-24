import React from 'react'
import { TableColumn } from './table-column'
import { TableRow } from './table-row'
import { TableHead } from './table-head'

type TableProps = {
  children: React.ReactNode
}

export function Table({ children }: TableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">{children}</table>
    </div>
  )
}

Table.Column = TableColumn
Table.Row = TableRow
Table.Head = TableHead
