import React from 'react'
import './Header.css'
function Header() {
  return (
    
        <div className="button">
            <button className='button1'>
                <a href='/login' id='left'>Login</a>
            </button>
            <button className='button1'>
                <a href='/register' id='right'>Signup</a>
            </button>
        </div>

  )
}

export default Header