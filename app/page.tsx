'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [bookName, setBookName] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">Book Explorer</h1>
        <form className="space-y-6">
          <div className="relative">
            <input 
              type="text"
              placeholder="Enter book title"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          <Link 
            href={`/books/${bookName}/`}
            className="block w-full px-4 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 text-center"
          >
            Discover Books
          </Link>
        </form>
      </div>
    </div>
  );
}
