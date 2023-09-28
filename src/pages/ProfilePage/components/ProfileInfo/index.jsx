import React, { useEffect, useState } from 'react'
import { PaddingInfo, SeeProfile, SettingBtn, StyledFlex, UserStatus } from './style'
import { Avatar } from '@mui/material'
import { StyledColumn, StyledFlexEquleSapces } from '@/styles/commen'
import { Body3, Body5, H2, H4, LightBody1 } from '@/components/atoms/Typography/style'
import { Location } from '@/svg/HomeImges'
import { GapFlex } from '@/pages/HomePage/components/Jobs/components/JobCard/style'
import { ApplayBtn, SaveBtn, StyleSvg } from '@/modals/JobModal/style'
import { useDispatch, useSelector } from 'react-redux'

export default function ProfileInfo({ name, addres }) {
    const [timeNow, setTimeNow] = useState(null);
    const [session, setSession] = useState('am');
    const {status} = useSelector(state=>state.online)
    const currentTime = () => {
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();  
      if (hour === 0) {
        hour = 12;
      }
      if (hour > 12) {
        hour = hour - 12;
        setSession("pm");
      }
  
      hour = (hour < 10) ? "0" + hour : hour;
      minute = (minute < 10) ? "0" + minute : minute;
  
      const newTimeNow = hour + ":" + minute;
      setTimeNow(newTimeNow);
    }
  
    useEffect(() => {
      const time = setInterval(() => currentTime(), 1000);
      return () => clearInterval(time);
    }, []);
  
    return (
        <PaddingInfo>
            <StyledFlex width='60%'>
                <Avatar alt='profile photo' src='/assets/avtar.jpg' sx={{ "position": "relative", "width":"80px", "height": "80px" }} />
                <UserStatus isonline={`${status}`}/>
                <StyledColumn>
                    <H2 style={{fontWeight:400}}>{name}</H2>
                    <StyledFlexEquleSapces width='max-content'>
                        <div>{Location}</div>
                        <LightBody1>{addres} - {timeNow} {session}</LightBody1>
                    </StyledFlexEquleSapces>
                </StyledColumn>
            </StyledFlex>
            <StyledFlex width='35%'>
                <SeeProfile>See public view</SeeProfile>
                <SettingBtn>Profile setting</SettingBtn>
            </StyledFlex>
        </PaddingInfo>
    )
}
