import React from 'react'
import './Card1.css';

function Card1(props) {

  return (
    <div className='card1'>
        <div className='card1_upper'>
            <img className='card1_upperimg' src='images/contact.png' alt=''></img>
            <p className='card1_uppertext'>
                <span style={{fontWeight:'700'}}>Micheal Sheen</span><br></br>
                <span>Buyers ,{props.buyer_name}</span>
                <br></br>
                <br></br>
                <span>San Diego , California, USA</span></p>
        </div>
        <div className='card1_text'>
            <div className='card1_validity'>
                <p className='card1_text1'>Reqirement :</p>
                <div className='card1_posting'>
                    <p>Posted : march 2, 2020</p>
                    <p>Expires : july 2, 2020</p>
                </div>
            </div>
            <p className='card1_text2'>Fabric : <span style={{fontWeight: '400'}}>{props.product_name}</span></p>
            <div className='card1_WQ'>
                <p className='card1_text3'>Weight : <span style={{fontWeight: '400'}}>{props.weight_gsm}</span></p>
                <p className='card1_text4'>Quantity :  <span style={{fontWeight: '400'}}>{props.quantity}</span></p>
            </div>
            <p className='card1_text5'>Cost Bracket : <span style={{fontWeight: '400'}}>{props.price_rs}</span></p>
            <p className='card1_text6'>Lead Time Provision : <span style={{fontWeight: '400'}}>{props.lead_time}</span></p>
            <p className='card1_text7'>Delivery Loaction : <span style={{fontWeight: '400'}}>San Diego , USA</span></p>
        </div>
        <div className='card1_footer'>
            <img className='conatct_emoji' src='images/contact.png' alt= ''></img>
            <img className='messsage_emoji' src='images/message.png' alt= ''></img>
            <img className='share_emoji' src='images/share.png' alt= ''></img>
            <img className='bookmark_emoji' src='images/bookmark.jpg' alt= ''></img>
        </div>  
    </div>
  )
}

export default Card1
