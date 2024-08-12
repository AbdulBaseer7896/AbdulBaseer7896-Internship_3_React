import React, { useContext, useState } from 'react'
import Login from './Login'
import UserContext from '../Context/UserContext'
import NavBar from './NavBar'

export default function ExpenseItem() {
    const {user} = useContext(UserContext)


    const AllUserList = JSON.parse(localStorage.getItem("User_list")) || [];
    const path = window.location.pathname;
    
    const segment = path.split("/");
    const userName = segment[segment.length - 1];
  
    let [formData, setFormData] = useState({
      reason: "",
      amount: "",
      date: "",
    });
  
    let ThisUserList = AllUserList.filter((user) => user.user_name === userName);
    // const ThisUserList = AllUserList ? AllUserList.filter(user => user.user_name === userName) : [];
  
    function getUser(event) {
      let newData = { ...formData };
      let inputName = event.target.name;
      let inputValue = event.target.value;
  
      newData[inputName] = inputValue;
      setFormData(newData);
    }
  
    function safeData(event) {
      let currentData = {
        reason: formData.reason,
        amount: formData.amount,
        date: formData.date,
        user_name: userName,
      };
  
      // let ifUserNames = storedData.some(person => person.email === currentData.email);
      event.preventDefault();
  
      let totalData = [...AllUserList, currentData];
      localStorage.setItem("User_list", JSON.stringify(totalData));
  
      alert("your Data inserted success full !!");
      let nowData = {
        reason: "",
        amount: "",
        date: "",
      };
  
      setFormData(nowData);
    }

    // if(!user){
    //     alert("Kindly first Login")
    //     return <Login />
    // }

  return (
    <div className="main">
            <NavBar />

    <div className="bg-gray-50 mt-8 mx-32">
      <h1 className="text-center text-5xl font-bold py-10 underline">
        Your Expense List
      </h1>
      <div className="inputCon w-[100%] border border-gray-500 my-5">
        <form
          onSubmit={(e) => {
            safeData(e);
          }}
        >
          <input
            value={formData.date}
            name="date"
            onChange={(e) => {
              getUser(e);
            }}
            className="w-[10%] mx-10 py-2"
            type="date"
            placeholder="Enter the total Amount"
          />
          <input
            value={formData.reason}
            name="reason"
            onChange={(e) => {
              getUser(e);
            }}
            className="w-[45%] mx-10   border border-gray-700   py-2 px-4 my-5"
            type="text"
            placeholder="Enter the Reason"
          />
          <input
            value={formData.amount}
            name="amount"
            onChange={(e) => {
              getUser(e);
            }}
            className="w-[20%] mx10 py-2 px-4     border border-gray-700  my-5"
            type="number"
            placeholder="Enter the total Amount"
          />
          <button
            type="submit"
            className="border border-gray-600 px-4 py-2 ml-4"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="grid grid-cols-3 text-center gap-10 pt-5 text-4xl font-bold justify-evenly">
        <p>Date</p>
        <p>Reason</p>
        <p>Amount</p>
      </div>
      {ThisUserList.length > 0 ? (
        ThisUserList.map((element, index) => {
          const formattedDate = new Date(element.date).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );

          return (
            <div
              key={index}
              className="grid grid-cols-3 text-justify gap-0 text-2xl mt-2 bg-gray-400 border border-black"
            >
              <p className="border border-black py-3 px-4">{formattedDate}</p>
              <p className="border border-black py-3 px-4">{element.reason}</p>
              <p className="border border-black py-3 px-4">{element.amount}</p>
            </div>
          );
        })
      ) : (
        <div className="grid grid-cols-3 text-justify gap-0 text-2xl mt-2 bg-gray-400 border border-black">
          <p className="border border-black py-3 px-4">Null</p>
          <p className="border border-black py-3 px-4">Null</p>
          <p className="border border-black py-3 px-4">NUll</p>
        </div>
      )}
    </div>

    </div>
  )
}