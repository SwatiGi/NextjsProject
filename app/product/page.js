import React from 'react'
import Link from "next/link"
export default async function ProductPage({ params }) {
  let id = params;
 await new Promise((resolve)=>setTimeout(resolve,3000))
  return (
      <div className='text-4xl text-pink-500'>
      <h1>Welcome to the Products Store</h1>
      <Link href='/product'>Product</Link>
      <br></br>
      <Link href='/product/1'>1</Link>
      <br></br>
      
      <Link href='/product/2'>2</Link>
      
      
      </div>
  )
}

