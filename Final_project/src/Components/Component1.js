import React from 'react'
import Component2 from './Component2'
import './Component1style.css'

function Component1() {
  return (
    <div>
      <div id='comp1' className='div1'>
        <h2 className='title'>Password Manager</h2>
        <hr className='line1'></hr>
        <Component2/>
      </div>
    </div>
  )
}

export default Component1