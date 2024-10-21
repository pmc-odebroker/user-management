import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  const onSubmit=(ev)=>{
    ev.preventDefault()
  }

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className='title'>
            Signup for free
          </h1>
          <input type="name" placeholder='Full Name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <input type="password" placeholder='Password confirmation'/>
          <button className='btn btn-block'>Signup</button>
          <p className='message'>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
export default Signup
