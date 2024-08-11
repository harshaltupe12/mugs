import Navbar from '@/app/_components/Navbar'
import React from 'react'
import Hero from '../hero/page'

function Home() {
  return (
    <div className='md:px-40 px-3'>
        <div className="Navbar mt-10">
            <Navbar/>
            {/* <Hero/> */}
        </div>
    </div>
  )
}

export default Home