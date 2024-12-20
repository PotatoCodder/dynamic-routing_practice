import React from 'react'
import Link from 'next/link'
import Search from './Search'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link href='/' className="hover:text-gray-300 transition duration-300">
            Wiki Rocket
          </Link>
        </h1>
        <div className="w-1/3">
          <Search />
        </div>
      </div>
    </nav>
  )
}
