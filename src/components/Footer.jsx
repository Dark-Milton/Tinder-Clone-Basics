import React from 'react'
import './Footer.css'
import ReplayIcon from '@mui/icons-material/Replay'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CloseIcon from '@mui/icons-material/Close'
import StarRateIcon from '@mui/icons-material/StarRate'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import IconButton from '@mui/material/IconButton'

function Footer() {
  return (
    <div className='Footer-body'>
      <IconButton className='replay'>
        <ReplayIcon className='icons'/>
      </IconButton>

      <IconButton className='close'>
        <CloseIcon className='icons'/>
      </IconButton>

      <IconButton className='star'>
        <StarRateIcon className='icons'/>
      </IconButton>

      <IconButton className='favorite'>
        <FavoriteIcon className='icons'/>
      </IconButton>

      <IconButton className='flashon'>
        <FlashOnIcon className='icons'/>
      </IconButton>
    </div>
  )
}

export default Footer