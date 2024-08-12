
import React , {useState , useContext, useEffect} from 'react'
import UserContext from '../Context/UserContext'
import '../index.css';
import NavBar from './NavBar';
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    let [allUsers, setAllUser] = useState("");

    useEffect(() => {
      // Retrieve stored data from localStorage when the component mounts
      const data = JSON.parse(localStorage.getItem("storedData")) || [];
      setAllUser(data);
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setUser({ userName, password });
    
      let ifEmail = allUsers.some((person) => person.email === userName);
      let ifPassword = allUsers.some((person) => person.password === password);
    
      if (ifEmail && ifPassword) {
        alert("You successfully logged in !!!");
        let userData = allUsers.find((person) => person.email === userName);
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        navigate(`/Expense/${userData.userName}`);

      } else {
        alert("Your Email or Password is incorrect !!!");
      }
    };
    

  return (
    // <div>
    //   <NavBar/>
    //     Login
    //     <h1 className='text-green-700'>Hello I am good</h1>
    //     <input value={userName}  onChange={(e)=>{setUserName(e.target.value)}} type="text"  placeholder='userName'/>
    //     <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password' />
    //     <button className='text-red-500' onClick={handleSubmit}>submit</button>
    // </div>
    
    
    <div>
      <NavBar />
      <div className="bg-gray-100 pt-11 h-[120vh]">
        <h1 className="text-4xl font-bold py-6 text-gray-600 text-center">
          Login Form
        </h1>
        <div
          id="form"
          className="w-[80%] lg:h-[40vh] lg:w-[40%] mx-auto md:h-[40vh] bg-gray-50 shadow-2xl text-center items-center justify-center border border-gray-400 rounded-3xl"
        >
          <div className="flex-col flex">
            <form id="login_form" onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-1 lg:gap-x-14 gap-y-5 m-10 grid-cols-1">
                <input
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  required
                  id="Email"
                  className="p-4 border border-gray-500 rounded-2xl shadow-lg hover:bg-gray-100 hover:text-black hover:border-gray-400"
                  type="email"
                  placeholder="Email"
                />
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  id="Password"
                  className="p-4 border border-gray-500 rounded-2xl shadow-lg hover:bg-gray-100 hover:text-black hover:border-gray-400"
                  type="password"
                  placeholder="Password"
                />
                <button
                  required
                  type="submit"
                  className="p-4 border bg-gray-400 font-bold text-white text-2xl border-gray-500 rounded-2xl shadow-lg hover:bg-white hover:text-gray-400 hover:border-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
