import React from 'react'

function Value() {
    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='lg:flex justify-between items-center'>
                <div>
                    <h3 className='uppercase text-2xl'>[ value ]</h3>
                </div>
                <div className='space-y-4'>
                    <div className="flex justify-between items-center border-b border-[#374836] pb-2">
                        <h3 className="text-2xl">Landscape Design</h3>
                        <h3 className="text-2xl font-bold">01</h3>
                    </div>
                    <div className="flex justify-between items-center space-x-28 border-b border-[#374836] pb-2">
                        <h3 className="text-2xl">Indoor Garden</h3>
                        <h3 className="text-2xl font-bold">02</h3>
                    </div>
                </div>
            </div>

            <div className='py-24 flex justify-between items-center'>
                <div>
                    <h1 className='text-[#374836] text-7xl font-bold'>WE ARE <span className="bg-gradient-to-r from-gray-400 to-green-800 bg-clip-text text-transparent">DIFFERENT</span> <br /> IN EVERY WAYS</h1>
                </div>
                <div>
                    <button className="bg-[#374836] py-3 px-16 text-[#F9FBF3] font-bold cursor-pointer hover:rounded-2xl transition-all duration-400">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Value