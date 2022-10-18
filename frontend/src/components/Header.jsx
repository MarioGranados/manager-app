import React from 'react'
import 'react-icons'


function Header() {
  return (
    <div className='container'>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/">Home</a>
    </div>
  )
}

export default Header