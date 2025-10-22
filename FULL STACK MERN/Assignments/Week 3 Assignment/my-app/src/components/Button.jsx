import React from 'react'
import clsx from 'clsx'

export default function Button({ children, variant = 'primary', onClick, className = '', ...props }) {
  const base = 'px-4 py-2 rounded-md font-medium focus:outline-none transition'
  const variants = {
    primary: 'bg-sky-600 text-white hover:bg-sky-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  }
  return (
    <button
      onClick={onClick}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
