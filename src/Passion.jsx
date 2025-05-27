import passionImg from '../src/assets/passion.jpg'
import { CiHeart } from "react-icons/ci";
import { SiGooglecolab } from "react-icons/si";
import { FaHockeyPuck } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";

function Passion() {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='lg:flex justify-between items-center gap-5'>
                <div className=''>
                    <img className='bg-cover w-200 h-120 object-cover rounded-3xl' src={passionImg} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <h2 className='inline-block bg-[#DBE6DC] p-2 rounded text-2xl'><CiHeart /></h2>
                        <h2 className='text-[#374836] text-3xl font-semibold'>Passion in every work</h2>
                        <p className='text-[#98A194] text-xl'>We are deeply passionate about creating beautiful, sustainable green landscapes for our clients.</p>
                    </div>
                    <div>
                        <h2 className='inline-block bg-[#DBE6DC] p-2 rounded text-2xl'> <SiGooglecolab /></h2>
                        <h2 className='text-[#374836] text-3xl font-semibold'>Collaboration on top</h2>
                        <p className='text-[#98A194] text-xl'>We make your dream design come true by combining your ideas with our 10+ years of garden design expertise.</p>
                    </div>
                    <div>
                        <h2 className='inline-block bg-[#DBE6DC] p-2 rounded text-2xl'><FaHockeyPuck /></h2>
                        <h2 className='text-[#374836] text-3xl font-semibold'>Sustainability in check</h2>
                        <p className='text-[#98A194] text-xl'>We love nurturing nature, one garden at a time, so that you can enjoy the beautiful landscape of our garden even longer.</p>
                    </div>
                    <div>
                        <h2 className='inline-block bg-[#DBE6DC] p-2 rounded text-2xl'> <FaSun /></h2>
                        <h2 className='text-[#374836] text-3xl font-semibold'>Creativity unleashed</h2>
                        <p className='text-[#98A194] text-xl'>We make sure to only give you our innovative designs that stand out to make sure that your garden is not like the others.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Passion