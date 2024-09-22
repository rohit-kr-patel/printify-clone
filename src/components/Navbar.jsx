import React from 'react'

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <div>
       <header className="flex justify-between items-center p-4 shadow-md">
                        <div className="flex items-center">
                            <img src="https://printify.com/wp-content/uploads/2021/09/Printify-Snap-Logo-Author.jpg" alt="Printify logo" className="mr-2 printify-logo"/>
                            <span className="text-green-600 text-2xl font-bold">Printify</span>
                        </div>
                        <nav className="hidden md:flex space-x-4">
                            <a href="#" className="text-gray-700">Catalog</a>
                            <a href="#" className="text-gray-700">How it works</a>
                            <a href="#" className="text-gray-700">Pricing</a>
                            <a href="#" className="text-gray-700">Blog</a>
                            <a href="#" className="text-gray-700">Services</a>
                            <a href="#" className="text-gray-700">Use-cases</a>
                            <a href="#" className="text-gray-700">Need help?</a>
                        </nav>
                        <div className="flex space-x-4">
                            <button className="text-gray-700">Log in</button>
                            <button className="bg-green-600 text-white px-4 py-2 rounded">Sign up</button>
                        </div>
                        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
                        <GiHamburgerMenu className='text-3xl ' />
                        </button>
                    </header>
                    {menuOpen && (
        <nav className="md:hidden bg-white shadow-md p-4">
          <a href="#" className="block text-gray-700 mb-2">Catalog</a>
          <a href="#" className="block text-gray-700 mb-2">How it works</a>
          <a href="#" className="block text-gray-700 mb-2">Pricing</a>
          <a href="#" className="block text-gray-700 mb-2">Blog</a>
          <a href="#" className="block text-gray-700 mb-2">Services</a>
          <a href="#" className="block text-gray-700 mb-2">Use-cases</a>
          <a href="#" className="block text-gray-700 mb-2">Need help?</a>
        </nav>
      )}  
    </div>
  )
}

export default Navbar
