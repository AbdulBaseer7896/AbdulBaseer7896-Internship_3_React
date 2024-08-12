import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Text() {

    const {user} = useContext(UserContext)
    if(!user) return <div>please Login</div>
  return (
    <div>
        {user.password}
    </div>
  )
}

export default Text
