'use client'
import React from 'react'
import { useParams } from 'next/navigation'
export default function profileDetail() {
    const {category, id} = useParams();

  return (
    <div>
      <div>
        <h1>Profile: {id} in {category} category</h1>
      </div>
    </div>
  )
}
