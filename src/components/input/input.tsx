import React from 'react'

export type InputProps = {
  name?: string
  label?: string
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ name, label, type, disabled, value, ...rest }: InputProps) {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">
        {label}
      </label>
      <input
        {...rest}
        name={name}
        type={type}
        id={label}
        className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
        disabled={disabled}
        defaultValue={value}
      />
    </div>
  )
}
