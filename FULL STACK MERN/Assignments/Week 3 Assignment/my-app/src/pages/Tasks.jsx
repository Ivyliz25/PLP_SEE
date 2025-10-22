import React, { useState, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Button from '../components/Button'
import Card from '../components/Card'

const FILTERS = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed'
}

export default function Tasks(){
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState(FILTERS.ALL)

  function addTask(e){
    e.preventDefault()
    if (!text.trim()) return
    const newTask = { id: Date.now(), text: text.trim(), completed: false }
    setTasks(prev => [newTask, ...prev])
    setText('')
  }

  function toggleComplete(id){
    setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t))
  }

  function deleteTask(id){
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const filtered = useMemo(() => {
    if (filter === FILTERS.ACTIVE) return tasks.filter(t => !t.completed)
    if (filter === FILTERS.COMPLETED) return tasks.filter(t => t.completed)
    return tasks
  }, [tasks, filter])

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Task Manager</h1>

      <form onSubmit={addTask} className="flex gap-2">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="New task" className="flex-1 p-2 border rounded" />
        <Button type="submit">Add</Button>
      </form>

      <div className="flex gap-2">
        {Object.values(FILTERS).map(f => (
          <Button key={f} variant={filter===f ? 'primary' : 'secondary'} onClick={() => setFilter(f)}>
            {f}
          </Button>
        ))}
      </div>

      <div className="grid gap-3">
        {filtered.length === 0 && <Card>No tasks yet.</Card>}
        {filtered.map(task => (
          <Card key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={task.completed} onChange={()=>toggleComplete(task.id)} />
              <span className={task.completed ? 'line-through text-slate-400' : ''}>{task.text}</span>
            </div>
            <div className="flex gap-2">
              <Button variant="danger" onClick={()=>deleteTask(task.id)}>Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
