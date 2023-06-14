import React from 'react'
import './button.css'

const UserInput = (props) => {
  return (
    // na user input be this
    <div>
        <input onChange={props.change} type="text" name="" id="button" />
    </div>
  )
}

export default UserInput