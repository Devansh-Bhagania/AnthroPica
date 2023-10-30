import React from 'react'

const Navbar = () => {
  return (
    <>
       <header>
        <nav className=' bg-cream w-full justify-between flex flex-row p-4 px-20'>
            <div className='inline-block p-1 text-3xl font-semibold'>
                Anthropic
            </div>

            <div className='flex flex-row gap-5 justify-right'>
            <div className='inline-block m-auto text-xl '>
                Home
            </div>
            <div className='inline-block m-auto text-xl'>
                Careers
            </div>
            <div className='inline-block m-auto text-xl'>
                About Us
            </div>
            <div className='inline-block m-auto text-xl'>
                Contact Us
            </div>
            </div>
        </nav>
       </header>
    </>
  )
}

export default Navbar