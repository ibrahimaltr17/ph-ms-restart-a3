import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {


    return (
        <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="space-y-4">
                    <div className="flex">
                        <a className="flex items-center gap-2 text-xl">
                            <div className='h-10 w-10'>
                                <img src={logo} alt="" />
                            </div>
                            <h2 className='gradient-text font-bold'>HERO.IO</h2>
                        </a>
                    </div>
                    <p className="text-sm text-gray-300">
                        Discover powerful apps designed to boost productivity and simplify your life.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <a className="p-2 bg-gray-700 rounded-full hover:bg-[#00D390] transition cursor-pointer">
                            <FaFacebookF />
                        </a>
                        <a className="p-2 bg-gray-700 rounded-full hover:bg-[#00D390] transition cursor-pointer">
                            <FaTwitter />
                        </a>
                        <a className="p-2 bg-gray-700 rounded-full hover:bg-[#00D390] transition cursor-pointer">
                            <FaGithub />
                        </a>
                        <a className="p-2 bg-gray-700 rounded-full hover:bg-[#00D390] transition cursor-pointer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="hover:text-[#9F62F2] cursor-pointer">Home</li>
                        <li className="hover:text-[#9F62F2] cursor-pointer">All Apps</li>
                        <li className="hover:text-[#9F62F2] cursor-pointer">My Installation</li>
                        <li className="hover:text-[#9F62F2] cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="hover:text-[#9F62F2] cursor-pointer">About Us</li>
                        <li className="hover:text-[#9F62F2] cursor-pointer">Careers</li>
                        <li className="hover:text-[#9F62F2] cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-[#9F62F2] cursor-pointer">Terms</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Get updates about new apps and features.
                    </p>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="input input-bordered w-full text-black"
                        />
                        <button className="btn bg-[#00D390] border-none text-white ml-2">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600"></div>

            {/* Bottom */}
            <div className="text-center py-4 text-sm text-gray-400">
                © {new Date().getFullYear()} HeroIO. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;