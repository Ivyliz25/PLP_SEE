import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

export default function APIList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')

  const PAGE_SIZE = 10

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [page])

  async function fetchData() {
    setLoading(true)
    setError(null)
    try {
      // JSONPlaceholder posts endpoint
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!res.ok) throw new Error('Network error')
      const data = await res.json()
      setItems(data)
    } catch (err) {
      setError(err.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  const filtered = items.filter(i => i.title.includes(query) || i.body.includes(query))
  const total = filtered.length
  const pages = Math.ceil(total / PAGE_SIZE)
  const visible = filtered.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Posts (JSONPlaceholder)</h1>

      <div className="flex gap-2">
        <input value={query} onChange={e=>{ setQuery(e.target.value); setPage(1)}} placeholder="Search titles or body..." className="flex-1 p-2 border rounded" />
        <Button onClick={() => fetchData()}>Refresh</Button>
      </div>

      {loading && <Card>Loading...</Card>}
      {error && <Card className="text-red-500">{error}</Card>}

      <div className="grid gap-3">
        {visible.map(post => (
          <Card key={post.id}>
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm">{post.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div>Showing {visible.length} of {total} posts</div>
        <div className="flex gap-2">
          <Button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page === 1} variant="secondary">Prev</Button>
          <div className="px-3 py-1 border rounded">Page {page} / {pages || 1}</div>
          <Button onClick={() => setPage(p => Math.min(pages || 1, p+1))} disabled={page === pages || pages === 0} variant="secondary">Next</Button>
        </div>
      </div>
    </div>
  )
}
