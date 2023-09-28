import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar';

import { setOnline, setInvisable } from '@/redux/slices/online'

import { Logout, Settings } from '@/svg/MainHeader'

import useAuth from '@/hooks/useAuth'
import { BoxBackground, ButtonWrap, ItemBox, ListBox, StatusButton } from './style'
import { StyledColumnCenter, StyledSvg } from '@/styles/commen'
import { Body5, LightBody1 } from '@/components/atoms/Typography/style'
import { getName } from '@/redux/slices/profile';

export default function ProfileBox() {
  const { logout } = useAuth()
  const { name } = useSelector((state) => state.profile)

  const { status } = useSelector((state) => state.online)
  const dispatch = useDispatch()
  const handleOnline = () => {
    dispatch(setOnline())
  }
  const handleInvisable = () => {
    dispatch(setInvisable())
  }
  useEffect(()=>{dispatch(getName())},[])
  return (
    <BoxBackground>
      <StyledColumnCenter>
        <Avatar sx={{"display": "flex", "width": "88px", "height": "88px", "marginBottom": "10px" }} src='/assets/avtar.jpg' alt='profile Photo' />
        <LightBody1>{name? name.firstName + " " + name.lastName : "Loading..."}</LightBody1>
        <Body5>Freelancer</Body5>
      </StyledColumnCenter>
      <ButtonWrap>
        <StatusButton isonline={`${status}`}
          onClick={handleOnline}
        >
          Online
        </StatusButton>
        <StatusButton isonline={`${!status}`}
          onClick={handleInvisable}
        >
          Invisible
        </StatusButton>
      </ButtonWrap>
      <ListBox>
        <ItemBox>
          <StyledSvg>{Settings}</StyledSvg>
          <LightBody1>Settings</LightBody1>
        </ItemBox>
        <ItemBox onClick={() => logout()}>
          <StyledSvg>{Logout}</StyledSvg>
          <LightBody1>Log out</LightBody1>
        </ItemBox>
      </ListBox>
    </BoxBackground>
  )
}
