"use client"
import Image from 'next/image'
import {signIn} from 'next-auth/react';
export default function Home() {
  return (
    <main className='text-center w-full mx-auto max-w-[1240px] mt-16'>
      <h1 className='text-4xl font-bold'>Home Page</h1>
      <button onClick={()=> signIn('google')} className='mx-auto mt-16 bg-black text-white p-5 rounded-2xl'>Sign with Google</button>

    </main>
  )
  }