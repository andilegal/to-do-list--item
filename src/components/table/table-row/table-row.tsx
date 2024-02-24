import React from 'react'

type TableRowProps = {
  children: React.ReactNode
}

export function TableRow({ children }: TableRowProps) {
  return <tr>{children}</tr>
}
