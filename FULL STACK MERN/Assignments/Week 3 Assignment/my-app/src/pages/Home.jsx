import React from 'react'
import TaskManager from '../components/TaskManager'
import Card from '../components/Card'


export default function Home() {
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2">
<TaskManager />
</div>
<div>
<Card>
<h3 className="font-semibold mb-2">About</h3>
<p className="text-sm opacity-80">This is a Task manager demo using React hooks and Tailwind CSS.</p>
</Card>
</div>
</div>
)}