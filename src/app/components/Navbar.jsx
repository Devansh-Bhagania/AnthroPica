import React from 'react'

const Navbar = () => {
  return (
    <>
       <header>
        <nav className=' bg-cream fixed w-full justify-between flex flex-row p-4 px-20'>
            <div className='inline-block p-1 text-3xl font-semibold'>
                Anthropic
            </div>

            <div className='flex flex-row gap-5 justify-right'>
            <div className='inline-block m-auto text-xl '>
                Product
            </div>
            <div className='inline-block m-auto text-xl'>
                Research
            </div>
            <div className='inline-block m-auto text-xl'>
                Company
            </div>
            <div className='inline-block m-auto text-xl'>
                News
            </div>
            <div className='inline-block m-auto text-xl'>
                Careers
            </div>

            <div>
            <button className='px-[20px] bg-black border-black border-solid border-2 font-medium py-2 text-white rounded-xl'>
                                            Request Access
                            </button>
            </div>
            </div>
        </nav>
       </header>
    </>
  )
}

export default Navbar