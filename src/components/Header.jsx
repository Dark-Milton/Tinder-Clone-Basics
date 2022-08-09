import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function Header() {
  return (
    <div className='Header-body'>
        <PersonIcon className='icons'/>
        <img className='logo' src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="" />
        <QuestionAnswerIcon className='icons'/>
    </div>
  )
}

export default Header