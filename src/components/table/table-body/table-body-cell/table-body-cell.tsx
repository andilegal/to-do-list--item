import React from 'react'

type TableBodyCellProps = {
  children: React.ReactNode
}

export function TableBodyCell({ children }: TableBodyCellProps) {
  return <td className="px-6 py-4">{children}</td>
}
