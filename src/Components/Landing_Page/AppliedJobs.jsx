import React from 'react'
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'
import WorkProcess from './WorkProcess/WorkProcess'
import About from './About/About'

import Prefrences from './Prefrences/Prefrences'
function AppliedJobs() {
  return (
    <div className='AplliedJobs'>
       <Navbar/>
       <Content/>
       <WorkProcess/>
       
       <About/>
       <Prefrences/>

    </div>
  )
}

export default AppliedJobs
