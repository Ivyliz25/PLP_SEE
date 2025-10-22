import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import APIList from './pages/APIList'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="apilist" element={<APIList />} />
      </Route>
    </Routes>
  )
}






