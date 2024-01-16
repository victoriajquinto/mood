import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-black flex text-white justify-center items-center'>
      <div className='w-full max-w-[600px] mx-auto mb-4'>
        <h1 className='text-6xl mb-4'>Mood: The Journal App for Serious Nerdges</h1>
        <p className='text-2xl text-white/60 mb-4'>The best app for tracking your mood throughout your life. All you have to do is be honest.</p>
        <Link href='/journal'>
          <button className='bg-blue-600 px-4 py-2 rounded-lg text-xl'>get started</button>
        </Link>
      </div>
    </div>
  )
}
