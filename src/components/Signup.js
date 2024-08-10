import React, { useEffect, useState } from 'react';
import NavBar from './navBar';

export default function SignUp() {


useEffect(() => {
    // Retrieve stored data from localStorage when the component mounts
    const data = JSON.parse(localStorage.getItem('storedData')) || [];
    setStoredData(data);
}, []);

let [formData , setFormData] = useState({

        name : '',
        userName : '',
        email : '',
        number : '',
        password : '',
        conformedP : ''
})
    
let [storedData , setStoredData] = useState([])

function getValue(event)
    {
    
            let oldData = {...formData}
            let inputName = event.target.name
            let inputValue = event.target.value
    
            oldData[inputName] = inputValue
    
            setFormData(oldData)
    }
    
    
    let  saveData = (event)=>{
    
        let currentData = {
            name : formData.name,
            email : formData.email,
            userName : formData.userName,
            number : formData.number,
            password : formData.password,
            conformedP : formData.conformedP
        }

        let ifEmail = storedData.some(person => person.email === currentData.email);
        let ifNumber = storedData.some(person => person.number === currentData.number);
        let ifUserName = storedData.some(person => person.userName === currentData.userName);
        // console.log(ifEmail)

        if(currentData.password !== currentData.conformedP)
        {
            alert("Please Enter same passwords")
            event.preventDefault();
        }
        else{

        // if(currentData.email !== storedData && currentData.userName && currentData.number)
        if(!ifEmail && !ifNumber && !ifUserName){
            let newData = [...storedData , currentData]
        
            setStoredData(newData)

        
            event.preventDefault()

            localStorage.setItem('storedData', JSON.stringify(newData));
            alert("you account is register successfully")

            setFormData({

                name : '',
                userName : '',
                email : '',
                number : '',
                password : '',
                conformedP : ''
            })
        }
        else{
            alert("Check your Email , Number or UserName is already exist !!!!")
            event.preventDefault();

        }
    }
    }

    return (
        <div>
            <NavBar />
        <div className="bg-gray-100 pt-11 h-[120vh]">
            <h1 className="text-4xl font-bold py-6 text-gray-600 text-center">Sign up Form</h1>
            <div id="form" className="w-[80%] lg:h-[65vh] mx-auto md:h-[95vh] bg-gray-50 shadow-2xl text-center items-center justify-center border border-gray-400 rounded-3xl" >
                <div className="flex-col flex">
                    {/* {storedData.length} */}
                    <form id="sign_up_form" onSubmit={saveData} className="grid lg:grid-cols-2 lg:gap-x-14 gap-y-5 m-10 grid-cols-1">
                        <input value={formData.name} onChange={(e)=>{getValue(e)}} required name="name" className="p-4 border border-gray-500 rounded-2xl shadow-lg hover:bg-gray-100 hover:text-black hover:border-gray-400" type="text" placeholder="Name"/>
                        <input value={formData.userName} onChange={(e)=>{getValue(e)}} required name="userName" className="p-4 border border-gray-500 rounded-2xl shadow-lg hover:bg-gray-100 hover:text-black hover:border-gray-400" type="text" placeholder="User Name" onInput={(e) => (e.target.value = e.target.value.replace(/ /g, ''))}/>
                        <input value={formData.email} onChange={(e)=>{getValue(e)}} required name="email" className="p-4 border border-gray-500 rounded-2xl shadow-lg hover:bg-gray-100 hover:text-black hover:border-gray-400" type="email" placeholder="Email"/>
                        <input value={formData.number} onChange={(e)=>{getValue(e)}} required name="number" className="p-4 border border-gray-500 rounded-2xl shadow-lg hover:bg-gray-100 hover:text-black hover:border-gray-400" type="number" placeholder="Mobile Number"/>
                        <input value={formData.password} onChange={(e)=>{getValue(e)}} required name="password" className="p-4 border border-gray-500 rounded-2xl shadow-lg hover:bg-gray-100 hover:text-black hover:border-gray-400" type="password" placeholder="Password"/>
                        <input value={formData.conformedP} onChange={(e)=>{getValue(e)}} required name="conformedP" className="p-4 border border-gray-500 rounded-2xl shadow-lg hover:bg-gray-100 hover:text-black hover:border-gray-400" type="password" placeholder="Confirmed Password"/>
                        <button required type="submit" className="p-4 border bg-gray-400 font-bold text-white text-2xl border-gray-500 rounded-2xl shadow-lg hover:bg-white hover:text-gray-400 hover:border-white">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
