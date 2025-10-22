import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar(){
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <nav className="bg-white dark:bg-slate-900 border-b dark:border-slate-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-lg">Ivy's App</Link> <br />
          <Link to="/tasks" className="text-sm">Tasks</Link> <br />
          <Link to="/apilist" className="text-sm">API List</Link>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="px-3 py-1 rounded-md border dark:border-slate-700 focus:outline-none">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}

