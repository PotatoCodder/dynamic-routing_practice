'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center w-full">
            <input 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500 h-10"
            />
            <button 
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 border border-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 h-10"
            >
                Search
            </button>
        </form>
    )
}
