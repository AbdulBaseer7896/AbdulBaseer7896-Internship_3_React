import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-semibold'>E-Shop</h3>
            <p>Your one-step fot all your needs. Shop with use and experience the best online shopping experience</p>
          </div>
          <div className='flex flex-col md:items-center'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <ul className='mt-4 space-y-2'>
              <li className='hover:underline'><Link to={"/"}>Home</Link></li>
              <li className='hover:underline'><Link Link to={"/hope"}>Shop</Link></li>
              <li className='hover:underline'><Link Link to={"/"}>Contact</Link></li>
              <li className='hover:underline'><Link Link to={"/"}>About</Link></li>
            </ul>
          </div>
          <div className=''>
            <h4 className='text-lg font-semibold'>Follow Us</h4>
            <div className='flex space-x-4 mt-4'>
              <a href="" className='hover: text-gray-400'><FaFacebook/></a>
              <a href="" className='hover: text-gray-400'><FaTwitter/></a>
              <a href="" className='hover: text-gray-400'><FaGithub/></a>
              <a href="" className='hover: text-gray-400'><FaLinkedin/></a>
            </div>
            <form className='flex items-center justify-center mt-8' action="">
              <input className='w-full p-2 rounded-lg bg-gray-800 border border-gray-600' type="email" placeholder='Enter Email' />
              <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600' >Subscribe</button>
            </form>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-4'>
          <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <p>&copy; 2024 E-shop All rights reserved</p>
            <div className='flex space-x-0 mt-4 md:mt-0'>
              <a className='hover:underline' href="">Privacy Policy</a>
              <a className='hover:underline' href="">Terms & Conduction</a>
            </div>

          </div>

        </div>
      </footer>
  )
}

export default Footer
