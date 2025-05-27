import React from 'react'

function Services() {
    return (
        <div className='w-11/12 mx-auto py-2'>
            <div className='lg:flex justify-between items-center'>
                <div>
                    <h2 className='text-xl text-[#374836] '>[ SERVICES ]</h2>
                </div>
                <div className=''>
                    <h2 className="relative text-[#374836] text-xl after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-[1px] after:bg-[#F9F3FB] after:w-full hover:after:w-1/2 after:transition-all after:duration-300 cursor-pointer">
                        See More Project
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Services