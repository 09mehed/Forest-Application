import { FaRegUser } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import bgImage from './assets/header.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { useEffect, useState } from "react";

function Navbar() {
        const [isScrolled, setIsScrolled] = useState(false);

        useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className=" bg-black/40 backdrop-blur-sm">
                <div className="">
                    <div>
                        <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#374836] shadow-md' : 'bg-transparent'}`}>
                            <div className="navbar w-11/12 mx-auto">
                                <div className="navbar-start">
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                            <li><a className="uppercase text-xl text-[#EDF3EB] font-bold">About</a></li>
                                            <li><a className="uppercase text-xl text-[#EDF3EB] font-bold">services</a></li>
                                            <li><a className="uppercase text-xl text-[#EDF3EB] font-bold">project</a></li>
                                            <li><a className="uppercase text-xl text-[#EDF3EB] font-bold">more</a></li>
                                        </ul>
                                    </div>
                                    <a className="font-semibold text-2xl text-[#EDF3EB]">Leaflife</a>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">
                                        <li><a className="uppercase text-xl text-[#EDF3EB] font-semibold">About</a></li>
                                        <li><a className="uppercase text-xl text-[#EDF3EB] font-semibold">services</a></li>
                                        <li><a className="uppercase text-xl text-[#EDF3EB] font-semibold">project</a></li>
                                        <li><a className="uppercase text-xl text-[#EDF3EB] font-semibold">more</a></li>
                                    </ul>
                                </div>
                                <div className="navbar-end text-xl flex items-center gap-4 text-[#EDF3EB]">
                                    <FaRegUser />
                                    <IoMdSearch />
                                </div>
                            </div>
                        </div>
                        <div className="w-11/12 mx-auto py-10">
                            <div className="flex justify-between gap-5">
                                <div className="">
                                    <h1 className="text-[#F9F3FB] text-7xl uppercase">create your <br></br> dream garden</h1>
                                    <p className="text-[#BDC4BB] text-2xl py-3">Crafting dream gardens with passion, creativity, and sustainability for over <br /> a decade with our experienced landscape artists and gardener teams.</p>
                                </div>
                                <div>
                                    <div className="border border-gray-400 p-3 rounded-2xl">
                                        <h3 className="text-[#F9F3FB] text-3xl">500+</h3>
                                        <h4 className="text-[#BDC4BB] text-2xl">Satisfied clients</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="space-y-4">
                                    <button className="bg-[#E9FBFB] py-3 px-8 text-[#374836] font-bold cursor-pointer hover:rounded-2xl transition-all duration-400">Get Started</button>

                                    <button className="relative text-[#F9F3FB] font-bold text-xl after:content-[''] after:absolute after:right-0 after:bottom-0 after:h-[1px] after:bg-[#F9F3FB] after:w-full hover:after:w-1/2 after:transition-all after:duration-300 cursor-pointer">
                                        Explore Projects
                                    </button>
                                </div>
                                <div className="max-w-md ml-auto border border-[#889286] py-2 px-3 bg-[#778567]/20 backdrop-blur-md rounded-lg">
                                    <div className="flex justify-between items-center gap-2 text-xl text-white mb-2">
                                        <FaLocationDot />
                                        <div className="bg-[#374836] rounded-full py-1 px-2 cursor-pointer hover:bg-[#F9FBF3] hover:rounded-full hover:text-[#374836] transition-all duration-400">
                                            <MdArrowOutward />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-white text-2xl font-bold">Hachioji Garden</h2>
                                        <p className="text-white">
                                            We design Hachioji Garden as a part of our new Landscape Design Commission in the country.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar