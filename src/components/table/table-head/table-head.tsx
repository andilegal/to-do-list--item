import React from 'react'

type TableHeadProps = {
  children: React.ReactNode
}

export function TableHead({ children }: TableHeadProps) {
  return <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">{children}</thead>
}
