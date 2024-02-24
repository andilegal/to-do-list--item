import React from 'react'

type TableBodyRowProps = {
  children: React.ReactNode
}

export function TableBodyRow({ children }: TableBodyRowProps) {
  return <tr className="border-b bg-gray-800 border-gray-700">{children}</tr>
}
