import React from 'react'
import './Prefrences.css'
import Button from './Button'
import {MdPersonAdd} from 'react-icons/md'
function Prefrences(props) {
       <input
               
              type={props.type}
              placeholder={props.text}
              img={props.img}              
        />
  return (
    <div className='Sheoran_Prefrences'>
       <div className='Sheoran_Prefrences_left'>
         <div className='Sheoran_Prefrences_left_heading1'>
          <h3>Why Choose Sheoran International Packer and Movers ?</h3>
         </div>
         <div className='Sheoran_Prefrences_left_heading2'>
          <h4> is a main global shifting business enterprise with its branches throughout India. We have our presence in each nook of India. Sheoran International Cargo Movers offers with Households, Corporate, and Commercial packaging and shifting.</h4>
         </div>
         <div className='Sheoran_Prefrences_left_heading3'>
          <ol type='numbers'>
           <li className='Sheoran_Prefrences_left_heading3_1'>
           : One of the primary reasons for selecting a specific international packers and movers is their reputation and reliability. People often prefer companies that have established themselves as trustworthy and have a proven track record of handling international moves efficiently.
           </li>
           <li>
           : International moves involve complex logistics, customs regulations, and paperwork. Choosing a company with experience and expertise in international relocations ensures that they are familiar with the processes involved and can navigate potential challenges effectively.
           </li>
           <li>
           : Max Logistic Packers Movers prioritize professionalism of their offerings. They have a crew of skilled experts who've know-how in packing, loading, unloading, and transportation of items. They make sure that your items are introduced properly and on time on your favored location.
           </li>
          </ol>
         </div>
       </div>
       <div className='Sheoran_Prefrences_Right'>
       <form className='Sheoran_Prefrences_Right_EnquireForm'>
         <Button
           text=" Enquire Us "
         />
          <label>  
          <input
           className='Sheoran_Prefrences_Right_textbox'
           type='text'
           placeholder='Name'
           img ={<MdPersonAdd /> }
          />
          <input
           className='Sheoran_Prefrences_Right_textbox'
           type='email'
           placeholder='Email-Id'
           name="email"
           img ={<MdPersonAdd /> }
          />
          <input
           className='Sheoran_Prefrences_Right_textbox'
           type='number'
           name="quantity"
           placeholder='Mobile-No'
           img ={<MdPersonAdd /> }
          />
          <div className='Sheoran_Prefrences_Right_textbox_'>
          <input
           className='Sheoran_Prefrences_Right_textbox_1'
           type='text'
           name="move-to"
           placeholder='Move-To'
           img ={<MdPersonAdd /> }
          />
          <input
           className='Sheoran_Prefrences_Right_textbox_1'
           type='number'
           name="weight"
           placeholder='Weight'
           img ={<MdPersonAdd /> }
          />
          </div>
          <div className='Sheoran_Prefrences_Right_textbox_'>
          <input
           className='Sheoran_Prefrences_Right_textbox_1'
           type='text'
           name="move-to"
           placeholder='Move-From'
           img ={<MdPersonAdd /> }
          />
          <input
           className='Sheoran_Prefrences_Right_textbox_1'
           type='number'
           name="weight"
           placeholder='Pincode'
           img ={<MdPersonAdd /> }
          />
          </div>
          <input
           className='Sheoran_Prefrences_Right_textbox_2'
           type='text'
           placeholder='Message box'
           img ={<MdPersonAdd /> }
          />
          </label>
          <Button
           text=" Submit "
         />
        </form>
       </div>
    </div>
  )
}

export default Prefrences
