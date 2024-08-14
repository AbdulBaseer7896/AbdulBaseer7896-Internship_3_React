import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckOut = ({setOrder}) => {
    const [billingToggle , setBillingToggle] = useState(true)
    const [shippingToggle , setShippingToggle] = useState(true)
    const [paymentToggle , setPaymentToggle] = useState(true)
    const [paymentMethod , setPaymentMethod] = useState("cod")

    const [billingInfo , setBillingInfo] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const [shippingInfo , setShippingInfo] = useState({
            address: '',
            city: '',
            zip: ''
        })

    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const handleOrder = ()=>{
        const newOrder = {
            products : cart.products,
            orderNumber :"1234",
            shippingInformation : shippingInfo,
            BillingInfo : billingInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)
        navigate("/order-confirmation")
    }
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECK OUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between'
                        onClick={()=>setBillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown/> : <FaAngleUp/>}

                        </div>
                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <labe className="block text-gray-700" htmlFor="">Name</labe>
                                <input onChange={(e)=>setBillingInfo({...billingInfo, name: e.target.value})} className='w-full px-3 py-2 border' type="text" name="name" placeholder='Enter Name' />
                            </div>
                            <div>
                                <label className='block text-gray-700' htmlFor="">Email</label>
                                <input onChange={(e)=>setBillingInfo({...billingInfo, email: e.target.value})}  className='w-full px-3 py-2 border' placeholder='Enter Email' type="email" name="email" />
                            </div>
                            <div>
                                <label  className='block text-gray-700' htmlFor="">Phone</label>
                                <input onChange={(e)=>setBillingInfo({...billingInfo, phone: e.target.value})} className='w-full px-3 py-2 border' type="number" name="phone" placeholder='Enter Phone #' />
                            </div>

                        </div>
                    </div>

                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between'
                        onClick={()=>setShippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown/> : <FaAngleUp/>}

                        </div>
                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <labe className="block text-gray-700" htmlFor="">Address</labe>
                                <input onChange={(e)=>setShippingInfo({...shippingInfo, address: e.target.value})} className='w-full px-3 py-2 border' type="text" name="Address" placeholder='Enter Address' />
                            </div>
                            <div>
                                <label className='block text-gray-700' htmlFor="">City</label>
                                <input  onChange={(e)=>setShippingInfo({...shippingInfo, city: e.target.value})} className='w-full px-3 py-2 border' placeholder='Enter City Name' type="city" name="email" />
                            </div>
                            <div>
                                <label  className='block text-gray-700' htmlFor="">Zip Code</label>
                                <input onChange={(e)=>setShippingInfo({...shippingInfo, zip: e.target.value})}  className='w-full px-3 py-2 border' type="text" name="zip" placeholder='Enter Zip Code ' />
                            </div>

                        </div>
                    </div>

                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between'
                        onClick={()=>setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown/> : <FaAngleUp/>}

                        </div>
                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input type="radio" name="payment" checked = {paymentMethod === "cod"} onChange={()=>setPaymentMethod("cod")}/>
                                <labe className="block text-gray-700 ml-2" htmlFor="">Cash on Delivery</labe>
                            </div>

                            <div className='flex items-center mb-2'>
                                <input type="radio" name="payment" checked = {paymentMethod === "DC"} onChange={()=>setPaymentMethod("DC")}/>
                                <labe className="block text-gray-700 ml-2" htmlFor="">Debit Card</labe>
                            </div>
                            {paymentMethod === "DC" && (
                                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                    <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2' htmlFor="">Card Number</label>
                                        <input className='border p-2 w-full rounded' type="number" placeholder='Enter Card Number'/>
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-semibold mb-2' htmlFor="">Card Holder Name</label>
                                        <input className='border p-2 w-full rounded' type="text" placeholder='Enter Card Number'/>
                                    </div>
                                    <div className='flex justify-between mb-4'>
                                        <div className='w-1/2 mr-2'>
                                            <label className='block text-gray-700 font-semibold mb-2' htmlFor="">Expiry Date</label>
                                            <input className='border p-2 w-full rounded' type="date" placeholder='Enter Card Number'/>
                                        </div>
                                        <div className='w-1/2 mr-2'>
                                            <label className='block text-gray-700 font-semibold mb-2' htmlFor="">CVV</label>
                                            <input className='border p-2 w-full rounded' type="text" placeholder='Enter Card Number'/>
                                        </div>
                                    </div>
                                
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                    <div className='space-y-4'>
                            {cart.products.map(product =>(
                                <div key={product.id} className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <img className='w-16 h-16 object-contain rounded' src={product.image} alt="" />
                                        <div className='ml-4'>
                                            <h4 className='text-md font-semibold'>{product.name}</h4>
                                            <p className='text-gray-600'>
                                                &{product.price} X {product.quantity}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='text-gray-800'>
                                        ${product.price * product.quantity}
                                    </div>
                                </div>
                            ))}
                    </div>
                {/* </div> */}
                <div className="mt-4 border-t pt-4">
                    <div className='flex justify-between'>
                        <span>Total Price: </span>
                        <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                    <button onClick={handleOrder} className='w-full bg-red-600 py-2 rounded-md text-white mt-6 hover:bg-red-800'>
                        place Order
                    </button>
                </div>
                </div>
            </div>
  );
};

export default CheckOut
