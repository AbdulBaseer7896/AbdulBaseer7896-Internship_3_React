import { useEffect, useState } from "react";
import NavBar from "./navBar";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  let [allUsers, setAllUser] = useState("");

  useEffect(() => {
    // Retrieve stored data from localStorage when the component mounts
    const data = JSON.parse(localStorage.getItem("storedData")) || [];
    setAllUser(data);
  }, []);
  const navigate = useNavigate();

  function getData(event) {
    let ifEmail = allUsers.some((person) => person.email === email);
    let ifPassword = allUsers.some((person) => person.password === password);

    console.log("its email = ", ifEmail);
    console.log(ifPassword);

    if (ifEmail && ifPassword) {
      alert("You successful login !!!");
      let userData = allUsers.find((person) => person.email === email);
      
      localStorage.setItem("loggedIn" , true )
      localStorage.setItem( "userName" , `${userData.userName}`)
      console.log("I see home ")
      navigate(`/Home/${userData.userName}`);
    } else {
      alert("You Email or Password is Not correct !!! ");
      event.preventDefault();
    }
  }

  return (
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
            <form id="login_form" onSubmit={getData}>
              <div className="grid lg:grid-cols-1 lg:gap-x-14 gap-y-5 m-10 grid-cols-1">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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
  );
}
