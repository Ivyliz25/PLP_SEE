import React from 'react'

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-slate-800 border dark:border-slate-700 shadow-sm rounded-lg p-4 ${className}`}>
      {children}
    </div>
  )
}
