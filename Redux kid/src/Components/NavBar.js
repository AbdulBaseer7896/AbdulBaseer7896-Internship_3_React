import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import ContactUS from './ContactUS'

const NavBar = () => {
  const amount = useSelector(state => state.amount)
  console.log(amount)
  return (
    <div>
        <div className='bg-gray-500 px-32 py-3 flex justify-between'> 
            <ul className='flex gap-10 text-4xl'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li><Link to={"/contactUS"}>Contact Us</Link></li>
            </ul>
            <h1 className='text-3xl'>Total Amount = {amount}</h1>
        </div>
    </div>
  )
}

export default NavBar
