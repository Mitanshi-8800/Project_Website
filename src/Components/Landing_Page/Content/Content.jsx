import React from 'react'
import './Content.css'
function Cards() {
  return (
    <div className='Sheoran_Content'>
    <div className='Sheoran_Content_left'>
    <div className='Sheoran_Content_left_heading1' >
    <h1> Welcome to  <span>Sheoran</span> International Packers and Movers</h1>
    </div>
    <div className='Sheoran_Content_left_heading2' >
    <p>Sheroan International Packers and Movers was founded in 2005 by Pawan Sheroan. We are 
      an established name in the packing and shipping industry. As a dedicated service provider, 
      we strive to provide the best service to our clients. Our team ensures careful packaging, 
      handling and speedy delivery of various goods. </p>
    </div>
    <div className='Sheoran_Content_left_heading3' >
    <h2>Track Your Shipment</h2>
    </div>
    <div className='Sheoran_Content_left_Button' >
    <h4>Enter your Tracking Number...</h4>
    <button className='Sheoran_Content_Button'>Track here</button>
    </div>
    <div className='Sheoran_Content_left_heading4' >
    <a href='#'> Sheoran International Reference Tracking </a>
    </div>
    </div>
    <div className='Sheoran_Content_right'>
     <img src='./Image/Content.png' height={500} width={680} />
   </div>
    </div>
    
  )
}

export default Cards
