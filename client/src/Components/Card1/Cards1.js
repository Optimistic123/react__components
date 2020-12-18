import React , { useState } from 'react'
import Card1 from './Card1'
import './Card1.css'
import Datas from './product_data';

function Cards1(props) {
    const [datas,setDatas] = useState(Datas.dataofC);

  return (
    <div className='cards_row'>
        {datas.map(data => (
          <Card1
            key={data.id}
            product_name = {data.product_name}
            lead_time = {data.lead_time}
            weight_gsm = {data.weight_gsm}
            quantity = {data.quantity}
            price_rs = {data.price_rs}
            buyer_name = {data.buyer_name }
            
          />
        ))}
    </div>
  )
}

export default Cards1
