import React from 'react'

type TableColumnProps = {
  children: React.ReactNode
}

export function TableColumn({ children }: TableColumnProps) {
  return (
    <th scope="col" className="px-6 py-3">
      {children}
    </th>
  )
}
