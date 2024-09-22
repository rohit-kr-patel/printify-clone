import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer className="bg-gray-100 py-4 flex flex-col items-center justify-center px-8">
        <div className="text-gray-600 text-sm flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
          <a href="#" className="hover:underline">Intellectual Property Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Security</a>
        </div>
        <div className="text-gray-600 text-sm mt-2 text-center">
          © 2024 Printify, Inc. All rights reserved.
        </div>
      </footer>

    </div>
  )
}

export default Footer
