import React from 'react'
import './Prefrences.css'
function Button(props) {
  return (
    <>
    <button className='Primary_button'>
      {props.text}
      {props.icon}
    </button>
    
    </>
  )
}

export default Button
