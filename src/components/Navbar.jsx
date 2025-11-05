import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import spLogo from "../assets/images/sp_logo.png";
import spLogoWithTitle from "../assets/images/logo-with-title.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#002147ee] text-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center p-7">

                    <div className="flex items-center gap-3">
                        <img
                            src={spLogoWithTitle}
                            alt="Sindh Police Logo"
                            className="h-20"
                        />
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="hover:text-yellow-400 transition">
                            Home
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            About us
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            Welfare
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            Traffic Section
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            Transfer Orders
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            Jobs
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            Contact Us
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#001530] text-white px-6 py-4 space-y-4 transition-all duration-300">
                    <a href="#" className="block hover:text-yellow-400">
                        Home
                    </a>
                    <a href="#" className="block hover:text-yellow-400">
                        About
                    </a>
                    <a href="#" className="block hover:text-yellow-400">
                        Services
                    </a>
                    <a href="#" className="block hover:text-yellow-400">
                        Contact
                    </a>
                    <button className="w-full bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition">
                        Report Crime
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
