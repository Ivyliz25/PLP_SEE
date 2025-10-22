import React, { useMemo, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Card from './Card'
import Button from './Button'

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('All')

  const addTask = () => {
    const t = text.trim()
    if (!t) return
    setTasks([{ id: Date.now(), text: t, completed: false }, ...tasks])
    setText('')
  }

  const toggle = (id) =>
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)))

  const del = (id) => setTasks(tasks.filter(t => t.id !== id))

  const filtered = useMemo(() => {
    if (filter === 'Active') return tasks.filter(t => !t.completed)
    if (filter === 'Completed') return tasks.filter(t => t.completed)
    return tasks
  }, [tasks, filter])

  // 👇 make sure this return is INSIDE the function!
  return (
    <Card className="space-y-4">
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded-md"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="New task..."
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2">
        {['All', 'Active', 'Completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 text-sm rounded ${
              filter === f ? 'bg-gray-200 dark:bg-gray-700' : ''
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filtered.length === 0 ? (
          <li className="text-sm opacity-70">No tasks</li>
        ) : (
          filtered.map((t) => (
            <li
              key={t.id}
              className="flex items-center justify-between gap-3 border p-2 rounded"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggle(t.id)}
                />
                <span
                  className={t.completed ? 'line-through opacity-60' : ''}
                >
                  {t.text}
                </span>
              </div>
              <div>
                <Button variant="danger" onClick={() => del(t.id)}>
                  Delete
                </Button>
              </div>
            </li>
          ))
        )}
      </ul>
    </Card>
  )
}
