import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';

export default function RightSide({ handleClick }) {
  return (
    <Avatar sx={{ "cursor": "pointer", "width": "32px", "height": "32px" }} onClick={handleClick} alt="Profile imge" src="/assets/avtar.jpg" />
  )
}
