import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { StyleFlex } from '@/styles/commen';
import { Help, Message, Notification } from '@/svg/MainHeader';

export default function RightSide({ handleClick }) {
  return (
    <StyleFlex style={{width:"15%"}}>
      <div>{Help}</div>
      <div>{Message}</div>
      <div>{Notification}</div>
      <Avatar sx={{ "cursor": "pointer", "width": "32px", "height": "32px" }} onClick={handleClick} alt="Profile imge" src="/assets/avtar.jpg" />
    </StyleFlex>
  )
}
