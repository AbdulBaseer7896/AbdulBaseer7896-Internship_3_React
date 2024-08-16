import React from 'react'
import NavBar from './NavBar'
import { useSelector } from 'react-redux'


const About = () => {
  const amount = useSelector(state => state.amount)
  return (
    <div>
      <NavBar />
      <h1>I am about page</h1>
      <p>out amount is = {amount}</p>
    </div>
  )
}

export default About
