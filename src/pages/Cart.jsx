import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Model from '../components/Model';
import ChangeAddress from '../components/ChangeAddress';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { email, isLoggedIn } = useSelector(state => state.user);
    const userCart = useSelector(state => state.cart.userCarts[email] || { products: [], totalQuantity: 0, totalPrice: 0 });
    const [address, setAddress] = useState('main street , 0012');
    const [isModelOpen, setIsModelOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        return <div>Please log in to view your cart.</div>;
    }

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            {userCart.products.length > 0 ? (
                <div>
                    <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
                    <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                        <div className='md:w-2/3'>
                            <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                                <p>PRODUCTS</p>
                                <div className='flex space-x-8'>
                                    <p>Price</p>
                                    <p>Quantity</p>
                                    <p>SubTotal</p>
                                    <p>Remove</p>
                                </div>
                            </div>
                            {userCart.products.map((product) => (
                                <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                                    <div className='md:flex items-center space-x-4'>
                                        <img className='w-16 h-16 object-contain rounded' src={product.image} alt="" />
                                        <div className='flex-1 ml-4'>
                                            <h3 className='text-lg font-semibold'>{product.name}</h3>
                                        </div>
                                    </div>
                                    <div className='flex space-x-12 items-center'>
                                        <p>${product.price}</p>
                                        <div className='flex items-center justify-center border'>
                                            <button onClick={() => dispatch(decreaseQuantity({ id: product.id, email }))} className='text-xl font-bold px-1.5 border-r'>-</button>
                                            <p className='text-xl px-2'>{product.quantity}</p>
                                            <button onClick={() => dispatch(increaseQuantity({ id: product.id, email }))} className='text-xl font-bold px-1.5 border-l'>+</button>
                                        </div>
                                        <p>${(product.quantity * product.price).toFixed(2)}</p>
                                        <button className='text-red-500 hover:text-red-700' onClick={() => dispatch(removeFromCart({ id: product.id, email }))}><FaTrashAlt /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                            <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
                            <div className='flex justify-between mb-5 border-b pb-1'>
                                <span className='text-sm'>Total Items:</span>
                                <span>{userCart.totalQuantity}</span>
                            </div>
                            <div className='mb-4 border-b pb-2'>
                                <p>Shipping: </p>
                                <p className='ml-2'>Shipping to : {" "}
                                    <span className='text-xs font-bold'>{address}</span>
                                </p>
                                <button onClick={() => setIsModelOpen(true)} className='text-blue-500 hover:underline mt-1 ml-2'>Change Address</button>
                            </div>
                            <div className='flex justify-between mb-4'>
                                <span>Total Price:</span>
                                <span>${userCart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button onClick={() => navigate("/checkout")} className='w-full bg-red-600 text-white py-2 hover:bg-red-800'>Proceed To Checkout</button>
                        </div>
                    </div>
                    <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
                        <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
                    </Model>
                </div>
            ) : (
                <div className="flex justify-center">
                    <img src="{EmptyCart}" alt="" className='h-94' />
                </div>
            )}
        </div>
    );
}

export default Cart;
