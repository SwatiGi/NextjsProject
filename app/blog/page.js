import React from 'react'
import Link from "next/link"
export default function  Home()  {
  return (
      <div className='text-4xl text-pink-500'>
      <h1>This is Home page</h1>
      <Link href='/blog'>Blog</Link>
      <Link href='/blog/next'>Next</Link>
      
      </div>
  )
}

