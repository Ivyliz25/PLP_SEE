import React from 'react'


export default function Footer() {
return (
<footer className="bg-gray-50 dark:bg-gray-800 border-t">
<div className="container mx-auto px-4 py-6 text-sm text-center">
<div className="mb-2">© {new Date().getFullYear()} Ivy — All rights reserved.</div>
<div className="flex items-center justify-center gap-4">
<a href="#">Privacy</a><br />
<a href="#">Terms</a> <br />
<a href="#">Contact</a>
</div>
</div>
</footer>
)
}