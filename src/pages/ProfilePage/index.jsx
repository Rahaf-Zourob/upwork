"use client"

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MainLayout from '@/Layout/MainLayout'
import ProfileDiscription from './components/ProfileDescriprion'
import ProfileSide from './components/ProfileSide'
import Loading from '../loading'
import ProfileInfo from './components/ProfileInfo'

import useAuth from '@/hooks/useAuth'
import { getData, getName } from '@/redux/slices/profile'

import { BorderCard } from '@/components/atoms/BorderCard/style'
import { StyleFlex, StyledFlexPure } from '@/styles/commen'
import { StyledFlex } from './components/ProfileInfo/style'

export default function ProfilePage() {
  const { name, object, isLoading, jobTitle } = useSelector(state => state.profile)
  const dispatch = useDispatch()
  useEffect(() => {
    const id = localStorage.getItem('id')
    dispatch(getData(id))
    dispatch(getName(id))
  }, [])
  const userName = !isLoading ? (name?.firstName + " " + name?.lastName?.charAt(0) + ".") : "Loading..."

  return (
    <MainLayout>
      <BorderCard style={{ marginBottom: "5rem" }}>
        {isLoading ? <Loading /> :
          <>
            <ProfileInfo name={userName} addres={object?.data?.addres} />
            <StyleFlex>
              <ProfileSide eduction={object?.data?.education} />
              <ProfileDiscription />
            </StyleFlex>
          </>
        }
      </BorderCard>
    </MainLayout>
  )
}