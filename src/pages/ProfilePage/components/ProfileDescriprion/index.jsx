import React, { useEffect, useState } from 'react'
import { Body2, Body3, H2, H3, H4, H5, H6, LightBody1 } from '@/components/atoms/Typography/style'
import { AddTo, StylePadding, Title } from './style'
import ProfileModal from '@/modals/ProfileModals'
import Form from '@/components/atoms/Form'
import { useDispatch } from 'react-redux'
import { editJobTitle, editSkills } from '@/redux/slices/profile'
import { StyleFlex, StyledColumn, StyledColumnCenter, StyledFlexEquleSapces } from '@/styles/commen'
import { Chip } from '@mui/material'
import { GapFlex } from '@/pages/HomePage/components/Jobs/components/JobCard/style'
import { colors } from '@/styles/colors'
import Input from '@/components/atoms/Input'
import Select from 'react-select'
import { skills } from '@/mock/addData'

export default function ProfileDescription({ jobtitle, hourPrice, jobdescription, handleHourPrice, handleJobTitle,userSkills }) {
  const dispatch = useDispatch()
  const [selectedSkill, setSelectedSkill] = useState([]);

  useEffect(() => {
    // dispatch(editJobTitle("55"))
  }, [])
  const editJobTitle = () => {
  }
    const handleEditSkills=()=>{
dispatch(editSkills())
    }
  return (
    <section style={{ width: "70%" }}>
      <StylePadding>
        <Title><H3 style={{ fontWeight: 600 }}>
          <span>{jobtitle}</span>
          <ProfileModal title="Edit your title"
            description="Your title Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience)"
          >
            <Form handleSubmitForm={editJobTitle()}>

            </Form>
          </ProfileModal>
        </H3>
          <H4 style={{ fontWeight: 700 }}>
            <span>${hourPrice}.00/hr</span>
            <ProfileModal title="Change hourly rate"
              description="Please note that your new hourly rate will only apply to new contracts.">
            </ProfileModal>
          </H4>
        </Title>
        <StyledFlexEquleSapces>
          <LightBody1>{jobdescription}</LightBody1>
          <ProfileModal title="Overview"
            description="Use this space to show clients you have the skills and experience they're looking for.
        Describe your strengths and skills
        Highlight projects, accomplishments and education
        Keep it short and make sure it's error-free">rr</ProfileModal>
        </StyledFlexEquleSapces>
      </StylePadding>
      <StylePadding>
        <StyledColumn gap='10px'>
          <H4 style={{ fontWeight: 500 }}>Work history</H4>
          <Body3>No work yet. Once you start getting hired on Upwork, your work with clients will show up here.</Body3>
        </StyledColumn>
      </StylePadding>
      <StylePadding>
      <StyledColumn style={{height:"350px"}}>
      <StyleFlex style={{width:"max-content", gap:"10px",alignItems:"CENTER"}}>
          <H5>Portfolio </H5>
          <ProfileModal add></ProfileModal>
        </StyleFlex>
        <StyledColumnCenter>
          <div><img src='/assets/protofile.png' alt='protofile' /></div>
          <Body3>Talent who add portfolios to their profile are more likely to win work. (+20%)</Body3>
          <AddTo href='#'>Add a portfolio</AddTo>
        </StyledColumnCenter>
      </StyledColumn>
      </StylePadding>
      <StylePadding>
      <StyleFlex style={{width:"max-content",gap:"10px"}}>
          <H5>Skills</H5>
          <ProfileModal title="Edit skills"
            description="Skills">
              <Form handleSubmitForm={handleEditSkills}>
             
              </Form>
            </ProfileModal>
              </StyleFlex>
            <GapFlex style={{marginTop:"15px"}}>
            {userSkills?.map((skill) => (
              <Chip label={skill} key={skill} sx={{
                "&&:hover": {
                  backgroundColor: colors.palette.gray2
                },
              }} />
            ))}</GapFlex>
      </StylePadding>
    </section>
  )
}
