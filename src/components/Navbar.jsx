import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSearchTerm } from "../redux/productSlice";
import { logout } from "../redux/loginSlice";
import Model from "./Model";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // <\Mod>
    // Handle search form submission
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(search));
        navigate('/filter-data');
    };

    // Toggle between login and register forms
    const openSignUp = () => {
        setIsLogin(false);
        setIsModelOpen(true);
    };

    const openLogin = () => {
        setIsLogin(true);
        setIsModelOpen(true);
    };

    // Handle user logout
    const handleLogout = () => {
        dispatch(logout()); // Dispatch the logout action
        navigate('/'); // Redirect to the homepage or any other page after logout
    };

    // Retrieve cart products and user login state from Redux
    const { email, isLoggedIn } = useSelector(state => state.user || { email: '', isLoggedIn: false });
    const userCart = useSelector(state => state.cart.userCarts[email] || { products: [] });
    const products = userCart.products;

    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-3 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to='/'>E-Shop</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            className='w-full border py-2 px-4'
                            type="text"
                            placeholder='Search Product'
                        />
                        <FaSearch className='absolute top-3 right-3 text-red-500' />
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {products.length > 0 && (
                            <span className='absolute top-0 text-xs left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                                {products.length}
                            </span>
                        )}
                    </Link>

                    {isLoggedIn ? (
                        <button className='hidden md:block' onClick={handleLogout}>
                            LogOut
                        </button>
                    ) : (
                        <button className='hidden md:block' onClick={() => setIsModelOpen(true)}>
                            Login | Register
                        </button>
                    )}
                    <button>
                        <FaUser />
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link to={"/"} className='hover:underline'>Home</Link>
                <Link to={"/shop"} className='hover:underline'>Shop</Link>
                <Link to={"/"} className='hover:underline'>Contact</Link>
                <Link to={"/"} className='hover:underline'>About</Link>
            </div>

            <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
                {isLogin ? (
                    <Login openSignUp={openSignUp} setIsModelOpen={setIsModelOpen} />
                ) : (
                    <Register openLogin={openLogin} />
                )}
            </Model>
        </nav>
    );
};

export default Navbar;
