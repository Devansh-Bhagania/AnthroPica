import React from 'react'

const OurModels = () => {
  return (
    <>
    <div className='h-[700px] bg-cream flex flex-col'>
    <div className="text-6xl mx-auto text-center p-5 pt-20">
          <h1>Our Models</h1>
        </div>



        <div className='flex flex-row justify-center gap-10 mx-44'>
                <div className='h-[400px] rounded-3xl w-1/2 bg-white p-10'>
                        {/* logo */}
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10.5 10.5h3v3h-3v-3Zm12 3.75a.75.75 0 0 1-.75.75h-1.5v3.75a1.5 1.5 0 0 1-1.5 1.5H15v1.5a.75.75 0 1 1-1.5 0v-1.5h-3v1.5a.75.75 0 1 1-1.5 0v-1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V15h-1.5a.75.75 0 1 1 0-1.5h1.5v-3h-1.5a.75.75 0 1 1 0-1.5h1.5V5.25a1.5 1.5 0 0 1 1.5-1.5H9v-1.5a.75.75 0 0 1 1.5 0v1.5h3v-1.5a.75.75 0 1 1 1.5 0v1.5h3.75a1.5 1.5 0 0 1 1.5 1.5V9h1.5a.75.75 0 1 1 0 1.5h-1.5v3h1.5a.75.75 0 0 1 .75.75ZM15 9.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 .75-.75v-4.5Z" fill="#CC785C"></path>
                    </svg>
                    </div>

                    {/* heading */}

                    <div>
                        <h1 className='pt-3 text-3xl font-medium'>Claude</h1>
                    </div>
                         
                         {/* para  */}
                    <p className='text-left pt-3'>
                    Our most powerful model, which excels at a wide range of tasks from sophisticated dialogue and creative content generation to detailed instruction.
                    </p>

                        {/* subheader */}

                        <div>
                        <h1 className='pt-3 text-xl font-medium'>Good For:</h1>
                        </div>


                        {/* list  */}

                        <div>
                            <ul className='list-disc pl-4'>
                           <li> Complex reasoning</li>
                            <li>Creativity</li>
                            <li>Thoughtful dialogue</li>
                            <li>Coding</li>
                            <li>Detailed content creation</li>
                            </ul>
                        </div>
                </div>

                <div className='h-[400px] rounded-3xl w-1/2 bg-white  p-10 '>
                                {/* logo */}
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="m20.049 11.762-10.5 11.25a.75.75 0 0 1-1.284-.656L9.64 15.48l-5.403-2.029a.75.75 0 0 1-.282-1.219l10.5-11.25a.75.75 0 0 1 1.284.657L14.36 8.522l5.403 2.026a.751.751 0 0 1 .28 1.214h.005Z" fill="#CC785C"></path>
</svg>
                    </div>

                    {/* heading */}

                    <div>
                        <h1 className='pt-3 text-3xl font-medium'>Claude Instant</h1>
                    </div>
                         
                         {/* para  */}
                    <p className='text-left pt-3'>
                    A faster, cheaper yet still very capable model, which can handle a range of tasks including casual dialogue, text analysis, summarization, and document comprehension.
                    </p>

                        {/* subheader */}

                        <div>
                        <h1 className='pt-3 text-xl font-medium'>Good For:</h1>
                        </div>


                        {/* list  */}

                        <div>
                            <ul className='list-disc pl-4'>
                           <li>Performance at low cost</li>
                            <li>Reduced latency</li>
                            <li>Lightweight dialogue</li>
                            <li>Moderation</li>
                            <li>Classification</li>
                            </ul>
                        </div> 
                </div>

        </div>
    </div>
    </>
  )
}

export default OurModels