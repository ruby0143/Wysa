import React from 'react'
import './Text.css'

function Text(props) {
  return (
    <div className='text white'>
        <p>{props.text}</p>
    </div>
  )
}

export default Text