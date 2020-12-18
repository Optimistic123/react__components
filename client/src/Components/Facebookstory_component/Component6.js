import React from 'react'
import Facebookstory from './Facebookstory';
import Modal_button from '../Modal/Modal_button';
import './Facebookstory.css'

function Component6() {
  return (
    <div className='story_row'>
        <Facebookstory image='https://fee.org/media/37893/superman.jpg?anchor=center&mode=crop&width=1200&rnd=132387673720000000' 
        profilrSrc='https://media-exp1.licdn.com/dms/image/C5603AQFB3p-4H2whow/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=2RaBUFpgOHSTewp2qznFKmDd4OfPwqkHdspKpsynu3Q' 
        title='Manish' />
        <Facebookstory 
        image='https://media-exp1.licdn.com/dms/image/C5603AQFB3p-4H2whow/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=2RaBUFpgOHSTewp2qznFKmDd4OfPwqkHdspKpsynu3Q' 
        profilrSrc='https://media-exp1.licdn.com/dms/image/C5103AQH5xKVLid18ug/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=k1rSy4weKLRXTLa64YmXv8yASa7bMJW27o-452rOfM8' 
        title='Jonh' />
        <Facebookstory 
        image='https://media.newyorker.com/photos/5a875e3f33aebd0cab9bab12/1:1/w_1079,h_1079,c_limit/Brody-Passionate-Politics-Black-Panther.jpg' 
        profilrSrc='https://media-exp1.licdn.com/dms/image/C5103AQH5xKVLid18ug/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=k1rSy4weKLRXTLa64YmXv8yASa7bMJW27o-452rOfM8' 
        title='Nick' />
        <Modal_button />
    </div>
  )
}

export default Component6;

