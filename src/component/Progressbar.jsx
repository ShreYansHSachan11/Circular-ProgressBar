import React from 'react'
import './Progressbar.css'
import { BsCheckCircleFill } from 'react-icons/bs';
const Progressbar1 = () => {
  return (
    <>
    <div className="main-Container">
    <div className="container">
      <div className="value-container"><BsCheckCircleFill/> <p>Completed</p> </div>
    </div>
     <div className="container">
      <div className="circular-progress">
      </div>
      <div className="value-container">90% Completed</div>
    </div>
    </div>
    </>
  )
}

export default Progressbar1