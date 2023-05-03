import React from 'react'
import "./left.css";

const LeftSide = () => {
  return (
    <div className='leftSide'>
      <div className='LoginClick'>
        <h3>Already have an account?</h3>
        <button className='loginBtn'>Login</button>
      </div>
      <div className='bottomText'>
        <h1>Discover new things on Superapp</h1>
      </div>
    </div>
  )
}

export default LeftSide