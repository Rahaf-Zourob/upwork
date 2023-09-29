import MainLayout from '@/Layout/MainLayout'
import { getData, getName } from '@/redux/slices/profile'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileInfo from './components/ProfileInfo'
import ProfileDiscription from './components/ProfileDescriprion'
import { BorderCard } from '@/components/atoms/BorderCard/style'
import { StyleFlex, StyledFlexPure } from '@/styles/commen'
import ProfileSide from './components/ProfileSide'
import { StyledFlex } from './components/ProfileInfo/style'

export default function ProfilePage() {
  const { name, object, isLoading } = useSelector(state => state.profile)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
    dispatch(getName())
  }, [])
  const userName = !isLoading ? (name?.firstName + " " + name?.lastName?.charAt(0) + ".") : "Loading..."

  return (
    <MainLayout>
      <BorderCard style={{ marginBottom: "5rem" }}>
        <ProfileInfo name={userName} addres={object?.data?.addres} />
        <StyleFlex>
          <ProfileSide eduction={object?.data?.education} />
          <ProfileDiscription jobtitle={object?.data?.jobTitle}
            jobdescription={object?.data?.jobDescription} hourPrice={object?.data?.price}
            userSkills={object?.skills}
          />
        </StyleFlex>
      </BorderCard>
    </MainLayout>
  )
}
