import React, { useEffect, useState } from 'react'

const Register = ({openLogin}) => {
  
useEffect(() => {
  // Retrieve stored data from localStorage when the component mounts
  const data = JSON.parse(localStorage.getItem('UserStoreData')) || [];
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

          localStorage.setItem('UserStoreData', JSON.stringify(newData));
          alert("you account is register successfully")
          openLogin()

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
      <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
      <form onSubmit={saveData}>
      <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="">Name</label>
            <input value={formData.name} onChange={(e)=>{getValue(e)}} required name="name" className='w-full px-3 py-2 border' type="text" placeholder='Enter Name' />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="">User Name</label>
            <input value={formData.userName} onChange={(e)=>{getValue(e)}} required name="userName" className='w-full px-3 py-2 border' type="text" placeholder='Enter User Name' />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="">Email</label>
            <input  value={formData.email} onChange={(e)=>{getValue(e)}} required name="email" className='w-full px-3 py-2 border' type="email" placeholder='Enter Email' />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="">Number</label>
            <input  value={formData.number} onChange={(e)=>{getValue(e)}} required name="number" className='w-full px-3 py-2 border' type="number" placeholder='Enter Number' />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="">Password</label>
            <input value={formData.password} onChange={(e)=>{getValue(e)}} required name="password" className='w-full px-3 py-2 border' type="password" placeholder='Enter Password' />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="">Conformed Password</label>
            <input value={formData.conformedP} onChange={(e)=>{getValue(e)}} required name="conformedP" className='w-full px-3 py-2 border' type="password" placeholder='Enter Password Again' />
        </div>
        <div className='mb-4'>
            <button required type="submit" className='w-full bg-red-600 text-white py-2'>Sign Up</button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Already have an Account?</span>
        <button required type="submit" className='text-red-800' onClick={openLogin}>Login</button>
      </div>

    </div>
  )
}

export default Register
