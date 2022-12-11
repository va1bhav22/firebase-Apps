import React from 'react'
import "./login.scss"
const Login = () => {
  return (
    <div className='login'>
        <form >
            <input type="email" placeholder=' Email'/>
            <input type="password" placeholder='Password'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login