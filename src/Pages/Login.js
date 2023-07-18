import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='Login'>
            <h2 style={{color:'green'}}>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder=' Enter Username'
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder=' Enter Password'
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login