import React, { act } from 'react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/states'


const Home = () => {
  const dispatch = useDispatch()
  const {withdrawMoney , depositMoney , multiplyMoney} = bindActionCreators(actionCreators , dispatch)
  return (
    <div>
      <NavBar/>
      <div className='ml-20 mt-20'>
        <h1>You current Amount </h1>
        <button className='border border-red-600 py-2 px-4  bg-gray-500 ml-5' onClick={()=>{withdrawMoney(10)}}>-</button>
        Add to Cart
        <button className='border border-red-600 py-2 px-4  bg-gray-500 mr-5' onClick={()=>{depositMoney(10)}}>+</button>
        <button className='border border-red-600 py-2 px-4  bg-gray-500 mr-5' onClick={()=>{multiplyMoney(10)}}>x</button>
      </div>
    </div>

  )
}

export default Home
