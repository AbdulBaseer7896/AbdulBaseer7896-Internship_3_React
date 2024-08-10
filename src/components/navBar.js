import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'; // For solid icons
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Import the specific icons
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";



export default function NavBar() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');

    useEffect(() => {
      // Retrieve the username from localStorage
      const storedUserName = localStorage.getItem('userName');
      setUserName(storedUserName || ''); // Set to empty string if not found
    }, []);
  




    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const logoutFunction =()=>{
        localStorage.removeItem("loggedIn")
        localStorage.removeItem("userName")
        alert("You logout from your website")
        navigate("/Login")
    }

    return (
        <div className="children">
            {/* Overlay Menu */}
            <div id="overlay" className={`fixed inset-0 bg-white ${menuVisible ? 'block' : 'hidden'}`}>
                <div className="px-5 pt-6 pb-3 bg-red-700">
                    <button onClick={handleMenu}>
                    <FontAwesomeIcon icon={faXmark} className="text-gray-600" />
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
                        <li className="pb-5 flex justify-between font-[Tenor-Sans] font-bold tracking-widest text-[rgb(51,51,51)]"><Link to={'/Home'}>Home</Link></li>
                        <li className="pb-5 flex justify-between font-[Tenor-Sans] font-bold tracking-widest text-[rgb(51,51,51)]"><Link to={'/'}>Login</Link></li>
                        <li className="pb-5 flex justify-between font-[Tenor-Sans] font-bold tracking-widest text-[rgb(51,51,51)]"><Link to={'/SignUp'}>SignUp</Link></li>
                    </ul>

                    <div className="px-4 mt-10 text-xl">
                        {/* <i className="fa-solid fa-phone mr-4"></i> */}
                        <FontAwesomeIcon icon={faPhone} className="text-xl mr-4" />

                        <i>8/5211111111</i>
                    </div>
                    <div className="px-4 mt-10 text-xl">
                    <FontAwesomeIcon icon={faLocationDot} className="text-xl mr-4" />
                    <i>Store Location</i>
                    </div>

                    <div className="justify-center flex pt-24">
                        <div className="items-center">
                            <img className="text-center" src="/images/3.png" alt="Logo" />
                        </div>
                    </div>
                    <div className="justify-center flex-row pt-10">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faTwitter} className="text-xl mr-10" />
                        <FontAwesomeIcon icon={faInstagram} className="text-xl mr-10" />
                        <FontAwesomeIcon icon={faYoutube} className="text-xl" />
                    </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav id="Main-nav" className="flex px-5 pt-6 pb-3 justify-between bg-[#E7EAEF] text-[#2f3033] text-[18px] font-bold">
                <div id="cart-container" className="hidden absolute top-12 right-4 w-72 max-h-96 overflow-y-auto bg-white border border-gray-300 shadow-lg z-50 p-4"></div>

                <button className="my-auto item-center lg:hidden" onClick={handleMenu}>
                <FontAwesomeIcon icon={faBars} className="text-gray-600" />
                </button>

                <div className="flex items-center">
                    <p className="object-cover max-w-16 max-h-12 whitespace-nowrap">KENDIKIN CLOSET</p>
                </div>

                <div className="items-center hidden lg:flex">
                    <ul className="flex gap-10">
                        <li className="hover:text-blue-500"><Link to={`/Home/${userName}`}>Home</Link></li>
                        <li className="hover:text-blue-500"><Link to={'/Login'}>Login</Link></li>
                        <li className="hover:text-blue-500"><Link to={'/Signup'}>SignUp</Link></li>
                        <li className="hover:text-blue-500" > <button  onClick={(e)=>{logoutFunction(e)}}>Logout</button></li>
                    </ul>
                </div>


                <div className="flex items-center">
                    <FontAwesomeIcon icon={faSearchengin} className="text-3xl px-5 pl-16" />
                    <FontAwesomeIcon icon={faBagShopping} className="text-3xl" />
                </div>
            </nav>

            </div>
        
    );
}
