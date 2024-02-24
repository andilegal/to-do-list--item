import React from 'react'

type FormProps = {
  children?: React.ReactNode
} & React.InputHTMLAttributes<HTMLFormElement>

export function Form({ children, onChange }: FormProps) {
  return (
    <form className="max-w-sm mx-auto" onChange={onChange}>
      {children}
    </form>
  )
}
