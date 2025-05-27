import React from 'react'

function Work() {
    return (
        <div className='py-10'>
            <div className='bg-[#374836] py-5'>
                <div className='w-11/12 mx-auto py-5'>
                    <div className='lg:flex justify-between'>
                        <div>
                            <h1 className='text-6xl text-[#F9FBF3] font-semibold'>SIMPLE STEPS FOR OUR <br /> <span className='bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent'>LANDSCAPE</span> WORK</h1>
                        </div>
                        <div>
                            <h3 className='text-[#F9FBF3]'>[ HOW IT WORKS ]</h3>
                        </div>
                    </div>

                    <div className='lg:grid lg:grid-cols-3 gap-10 py-5'>
                        <div>

                        </div>
                        <div>
                            <h2 className='text-[#F9FBF3] text-2xl font-bold'>02 | Design & planning</h2>
                            <p className='text-[#98A295] text-xl'>Our team of experts meticulously crafts a custom garden design that aligns with your desires and your space characteristics.</p>
                        </div>
                        <div>
                            <h2 className='text-[#F9FBF3] text-2xl font-bold'>04 | Garden decorating</h2>
                            <p className='text-[#98A295] text-xl'>With your design finalized, we put on our gardening gloves and work, creating your garden to be as beautiful as envisioned.</p>
                        </div>
                        <div>
                            <h2 className='text-[#F9FBF3] text-2xl font-bold'>01 | Design consultation</h2>
                            <p className='text-[#98A295] text-xl'>In the initial step, we sit down with you to have a detailed discussion about your gardening vision and preferences.</p>
                        </div>
                        <div>
                            <h2 className='text-[#F9FBF3] text-2xl font-bold'>03 | Implement construction</h2>
                            <p className='text-[#98A295] text-xl'>We present the design to you for review. Once approved, we move forward to implement the plan with construction.</p>
                        </div>
                        <div className='text-[#98A295] text-3xl col-start-3 row-start-3 text-right'>
                            Leaflife
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work