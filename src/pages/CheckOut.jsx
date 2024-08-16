import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckOut = ({ setOrder }) => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(true);
    const [paymentToggle, setPaymentToggle] = useState(true);
    const [paymentMethod, setPaymentMethod] = useState("cod");

    const [billingInfo, setBillingInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        zip: ''
    });

    const cart = useSelector(state => state.cart.userCarts[state.user.email] || { products: [], totalPrice: 0 });
    const navigate = useNavigate();

    const handleOrder = () => {
        const newOrder = {
            products: cart.products,
            orderNumber: "1234",
            shippingInformation: shippingInfo,
            BillingInfo: billingInfo,
            totalPrice: cart.totalPrice
        };
        setOrder(newOrder);
        navigate("/order-confirmation");
    };

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECK OUT</h3>
            <form onSubmit={handleOrder}>
                <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                    <div className='md:w-2/3'>
                        {/* Billing Information */}
                        <div className='border p-2 mb-6'>
                            <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
                                <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                                <div>
                                    <label className="block text-gray-700" htmlFor="billing-name">Name</label>
                                    <input required
                                        id="billing-name"
                                        onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
                                        className='w-full px-3 py-2 border'
                                        type="text"
                                        placeholder='Enter Name'
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-700' htmlFor="billing-email">Email</label>
                                    <input required
                                        id="billing-email"
                                        onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
                                        className='w-full px-3 py-2 border'
                                        placeholder='Enter Email'
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-700' htmlFor="billing-phone">Phone</label>
                                    <input required
                                        id="billing-phone"
                                        onChange={(e) => setBillingInfo({ ...billingInfo, phone: e.target.value })}
                                        className='w-full px-3 py-2 border'
                                        type="tel"
                                        placeholder='Enter Phone #'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Shipping Information */}
                        <div className='border p-2 mb-6'>
                            <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
                                <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                                <div>
                                    <label className="block text-gray-700" htmlFor="shipping-address">Address</label>
                                    <input required
                                        id="shipping-address"
                                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                                        className='w-full px-3 py-2 border'
                                        type="text"
                                        placeholder='Enter Address'
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-700' htmlFor="shipping-city">City</label>
                                    <input required
                                        id="shipping-city"
                                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                                        className='w-full px-3 py-2 border'
                                        type="text"
                                        placeholder='Enter City Name'
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-700' htmlFor="shipping-zip">Zip Code</label>
                                    <input required
                                        id="shipping-zip"
                                        onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                                        className='w-full px-3 py-2 border'
                                        type="text"
                                        placeholder='Enter Zip Code'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className='border p-2 mb-6'>
                            <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
                                <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                                <div className='flex items-center mb-2'>
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === "cod"}
                                        onChange={() => setPaymentMethod("cod")}
                                    />
                                    <label className="block text-gray-700 ml-2" htmlFor="payment-cod">Cash on Delivery</label>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <input required
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === "DC"}
                                        onChange={() => setPaymentMethod("DC")}
                                    />
                                    <label className="block text-gray-700 ml-2" htmlFor="payment-dc">Debit Card</label>
                                </div>
                                {paymentMethod === "DC" && (
                                    <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                        <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700 font-semibold mb-2' htmlFor="card-number">Card Number</label>
                                            <input required
                                                id="card-number"
                                                className='border p-2 w-full rounded'
                                                type="number"
                                                placeholder='Enter Card Number'
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700 font-semibold mb-2' htmlFor="card-holder-name">Card Holder Name</label>
                                            <input required
                                                id="card-holder-name"
                                                className='border p-2 w-full rounded'
                                                type="text"
                                                placeholder='Enter Card Holder Name'
                                            />
                                        </div>
                                        <div className='flex justify-between mb-4'>
                                            <div className='w-1/2 mr-2'>
                                                <label className='block text-gray-700 font-semibold mb-2' htmlFor="expiry-date">Expiry Date</label>
                                                <input required
                                                    id="expiry-date"
                                                    className='border p-2 w-full rounded'
                                                    type="date"
                                                />
                                            </div>
                                            <div className='w-1/2 ml-2'>
                                                <label className='block text-gray-700 font-semibold mb-2' htmlFor="cvv">CVV</label>
                                                <input required
                                                    id="cvv"
                                                    className='border p-2 w-full rounded'
                                                    type="text"
                                                    placeholder='Enter CVV'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                        <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                        <div className='space-y-4'>
                            {cart.products.length > 0 ? (
                                cart.products.map(product => (
                                    <div key={product.id} className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <img className='w-16 h-16 object-contain rounded' src={product.image} alt={product.name} />
                                            <div className='ml-4'>
                                                <h4 className='text-md font-semibold'>{product.name}</h4>
                                                <p className='text-gray-600'>
                                                    ${product.price} X {product.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='text-gray-800'>
                                            ${product.price * product.quantity}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                        </div>
                        <div className="mt-4 border-t pt-4">
                            <div className='flex justify-between'>
                                <span>Total Price: </span>
                                <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <button type='submit' required className='w-full bg-red-600 py-2 rounded-md text-white mt-6 hover:bg-red-800'>
                            Place Order
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default CheckOut;
