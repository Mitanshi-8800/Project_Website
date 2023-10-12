import React from 'react'
import './WorkProcess.css'
function WorkProcess() {
  return (
    <div className='WorkProcess'>
     <h1>Our Work Process</h1>
     <div className='WorkProcess_Content'>
     <div className='WorkProcess_Content1'>
     <img src='./Image/Service.png' alt='Service_img' width={100}/>
     </div>
     <img  className="loading_logo" src='./Image/Vector.png' width={50} height={50}/>
     
     <div className='WorkProcess_Content1'>
      <img src='./Image/Pack.png' alt='Service_img'/>
      
     </div>
     <img  className="loading_logo" src='./Image/Vector.png' width={50} height={50}/>
     <div className='WorkProcess_Content1'>
     <img src='./Image/load.png' alt='Service_img'/>
     
     </div>
     <img  className="loading_logo" src='./Image/Vector.png' width={50} height={50}/>
     <div className='WorkProcess_Content1'>
     <img src='./Image/Delivery.png' alt='Service_img'/>
    </div>
 

     </div>
    </div>
  )
}

export default WorkProcess
