import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="container lg:mx-auto h-screen justify-center flex flex-col">{children}</div>
  )
}
