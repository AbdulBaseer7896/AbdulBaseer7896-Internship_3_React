import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Productcard = ({product}) => {

  const dispatch = useDispatch()
  const  handleAddToCart = (e , product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("Product Added SuccessFull ")
  }

  const { email, password, isLoggedIn } = useSelector((state) => state.user);
  console.log("this si the email and page = " , email , password , isLoggedIn)
  return (
    <Link to={ isLoggedIn ? `/DisplayProduct/${product.id}` : ''}>
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
      <img className='w-full h-48 object-contain mb-4' src={product.image} alt="" />
      <h3 className='text-lg font-semibold'>{product.title}</h3>
      <p className='text-gray-500'>${product.price}</p>
      <div className='flex items-center mt-2'>
        <FaStar className='text-yellow-500' />
        <FaStar className='text-yellow-500' />
        <FaStar className='text-yellow-500' />
        <FaStar className='text-yellow-500' />
      </div>

            <div  className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'>
            <span className='group-hover:hidden'>+</span>
          {isLoggedIn ? 
            <span onClick={(e)=>handleAddToCart(e , product)} className='hidden group-hover:block'>Add to Cart</span>
            :
            <span className='hidden group-hover:block'>Login Required</span>
            }
          </div>
    </div>
    </Link>
  )
}

export default Productcard
