import React from 'react'

import { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext'
// import { useLocation } from 'react-router-dom'
const About = () => {
    const data = useContext(noteContext)
    console.log("This si the data " , data)
    // const location = useLocation()
    // console.log(location.pathname)
  return (
    <div>
      <h1>I am about page</h1>
      <p>{data.state.name} that is</p>
      
      {data.changeName()}
      <p>{data.state.name} this is</p>

    </div>
  )
}

export default About
