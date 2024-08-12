import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingBag, FaSearchengin, FaTimes, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

import { useNavigate } from "react-router-dom";
import UserContext from '../Context/UserContext';



export default function NavBar() {

    const [allUsers, setAllUser] = useState([]);
    const [userName, setUserName] = useState('');
    const [menuVisible, setMenuVisible] = useState(false);
    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve stored data from localStorage when the component mounts
        const data = JSON.parse(localStorage.getItem("storedData")) || [];
        setAllUser(data);
    }, []);

    // useEffect(() => {
    //     if (user && allUsers.length > 0) {
    //         const nameData = allUsers.find((person) => person.email === user.userName);
    //         setUserName(nameData ? nameData.name : '');
    //     } else {
    //         setUserName('');
    //     }
    // }, [user, allUsers]);


    const handleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const logoutFunction =()=>{
        setUser(null);
        localStorage.removeItem("user");
        alert("You logout from your website----")
        navigate("/Login")
    }

    return (
        <div className="children">
            {/* Overlay Menu */}
            <div id="overlay" className={`fixed inset-0 bg-white ${menuVisible ? 'block' : 'hidden'}`}>
                <div className="px-5 pt-6 pb-3 bg-red-700">
                    <button onClick={handleMenu}>
                    <FaTimes />
                    </button>
                </div>

                <div>
                    <ul className="flex justify-center gap-20 pt-4 pr-14">
                        <li className="tracking-[3px] font-[Tenor-Sans] font-[400] text-[#333333]">WOMEN</li>
                        <li className="tracking-[3px] font-[Tenor-Sans] font-[400] text-[#333333]">MEN</li>
                        <li className="tracking-[3px] font-[Tenor-Sans] font-[400] text-[#333333]">KIDS</li>
                    </ul>
                    <hr className="text-[#888888] mt-3 mx-4" />

                    <ul className="mt-5 px-4 pr-10">
                            <li className="pb-5 flex justify-between font-[Tenor-Sans] font-bold tracking-widest text-[rgb(51,51,51)]"><Link to={'/'}>Home</Link></li>
                        <li className="pb-5 flex justify-between font-[Tenor-Sans] font-bold tracking-widest text-[rgb(51,51,51)]"><Link to={'/Login'}>Login</Link></li>
                        <li className="pb-5 flex justify-between font-[Tenor-Sans] font-bold tracking-widest text-[rgb(51,51,51)]"><Link to={'/SignUp'}>SignUp</Link></li>
                    </ul>

                    <div className="px-4 mt-10 text-xl">
                        {/* <i className="fa-solid fa-phone mr-4"></i> */}
                        <FaPhone />

                        <i>8/5211111111</i>
                    </div>
                    <div className="px-4 mt-10 text-xl">
                    <FaMapMarkerAlt />
                    <i>Store Location</i>
                    </div>

                    <div className="justify-center flex pt-24">
                        <div className="items-center">
                            <img className="text-center" src="/images/3.png" alt="Logo" />
                        </div>
                    </div>
                    <div className="justify-center flex-row pt-10">
                    <div className="text-center flex">
                        <FaTwitter  className="text-xl mr-10"/>
                        <FaInstagram  className="text-xl mr-10"/>
                        <FaYoutube   className="text-xl" />
                    </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav id="Main-nav" className="flex px-5 pt-6 pb-3 justify-between bg-[#E7EAEF] text-[#2f3033] text-[18px] font-bold">
                <div id="cart-container" className="hidden absolute top-12 right-4 w-72 max-h-96 overflow-y-auto bg-white border border-gray-300 shadow-lg z-50 p-4"></div>

                <button className="my-auto item-center lg:hidden" onClick={handleMenu}>
                <FaBars />
                </button>

                <div className="flex items-center">
                    <p className="object-cover max-w-16 max-h-12 whitespace-nowrap">KENDIKIN CLOSET</p>
                </div>

                <div className="items-center hidden lg:flex">
                    <ul className="flex gap-10">
                        <li className="hover:text-blue-500"><Link to={`/`}>Home</Link></li>

                            {(!user || user === null) ? (
                                <li className="hover:text-blue-500"><Link to={`/Login`}>Expense</Link></li>
                            ) : (
                                <li className="hover:text-blue-500"><Link to={`/Expense/${user.userName}`}>Expense</Link></li>
                            )}
                        <li className="hover:text-blue-500"><Link to={'/Login'}>Login</Link></li>
                        <li className="hover:text-blue-500"><Link to={'/Signup'}>SignUp</Link></li>
                        <li className="hover:text-blue-500" > <button  onClick={(e)=>{logoutFunction(e)}}>Logout</button></li>
                    </ul>
                </div>


                <div className="flex items-center">
                    <FaSearchengin />
                    <FaShoppingBag/>
                </div>
            </nav>

            </div>
        
    );
}