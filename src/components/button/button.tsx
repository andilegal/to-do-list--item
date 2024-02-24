import React from 'react'

type ButtonProps<C extends React.ElementType> = {
  children?: React.ReactNode
  color: 'primary' | 'secondary' | 'outline'
  size: 'little' | 'medium' | 'full'
} & React.ComponentPropsWithoutRef<C>

export function Button<C extends React.ElementType = 'button'>({
  children,
  color,
  size,
  ...rest
}: ButtonProps<C>) {
  const dictionaryColors = {
    outline: 'text-blue-500 font-medium',
    primary:
      'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
    secondary:
      'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  }

  const dictionarySizes = {
    little: 'px-3 py-2 text-xs',
    medium: 'px-5 py-2.5 text-sm',
    full: 'w-full',
  }

  const classes = [dictionaryColors[color], dictionarySizes[size]].join(' ')

  return (
    <button className={`${classes}`} {...rest}>
      {children}
    </button>
  )
}
