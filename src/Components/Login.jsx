
import React , {useState , useContext} from 'react'
import UserContext from '../Context/UserContext'
import '../index.css';

function Login() {
    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)  =>{
        e.preventDefault()
        setUser({userName , password})
    }
  return (
    <div>
        Login
        <h1 className='text-green-700'>Hello I am good</h1>
        <input value={userName}  onChange={(e)=>{setUserName(e.target.value)}} type="text"  placeholder='userName'/>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='password' />
        <button className='text-red-500' onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
