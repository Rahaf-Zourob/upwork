import React, { useState } from 'react'
import { Chip } from '@mui/material'
import JobModal from '@/modals/JobModal'
import Drawer from '@mui/material/Drawer';

import { getSavedJob } from '@/redux/slices/job'

import Loading from '@/pages/loading'
import JobRaiting from '../JobRating'

import { Location, Payment, SaveJob, SavedJob } from '@/svg/HomeImges'


import { Body5, Body6 } from '@/components/atoms/Typography/style'
import { StyleFlex, StyledColumn, StyledFlexPure } from '@/styles/commen'
import { Description, GapFlex, HoverButton, JobDetailes, SaveJobBtn, SvgLocation } from './style'
import { colors } from '@/styles/colors'

export default function JobCard({ data, handleClick, btn}) {
  const [state, setState] = React.useState({
    right: true,
  });
  const [jobId, setJobId] = useState(data.id)
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
    setJobId(data.id)
  };
  return (
    <>
      <JobDetailes onClick={toggleDrawer('true', true)}>
        <StyleFlex>
          <StyledColumn>
            <HoverButton>{data.jobTitle}</HoverButton>
            <GapFlex>
              <Body5>{data.type} -price</Body5>
              <Body5>{data.clientBudget}</Body5>
              <Body5>{data.level} - level</Body5>
              <Body5>{`Posted ${data.postTime}`}</Body5>
            </GapFlex>
          </StyledColumn>
          <SaveJobBtn onClick={handleClick}>{btn}</SaveJobBtn>
        </StyleFlex>
        <Description>{data.jobDescription}</Description>
        <GapFlex>
          {data.skills.map((skill) => (
            <Chip label={skill} key={skill} sx={{
              "&&:hover": {
                backgroundColor: colors.palette.gray2
              },
            }} />
          ))}</GapFlex>
        <div
          style={{ "margin": "20px 0" }}>
          <Body6>
            <span>Proposle: </span>
            {data.proposelNumber}</Body6>
        </div>
        <GapFlex>
          <Body5>{Payment} Payment verified</Body5>
          <JobRaiting rate={data.rate} />
          <Body5>{data.spent} <span>spent</span></Body5>
          {data.location && <StyledFlexPure>
            <SvgLocation>{Location}&nbsp;</SvgLocation>
            <Body5>{data.location}</Body5>
          </StyledFlexPure>}
        </GapFlex>
      </JobDetailes>
      <Drawer
        anchor="right"
        PaperProps={{
          sx: {
            width: 1000,
            borderRadius: '15px',
            padding: 4,
          },
        }}
        open={state['true']}
        onClose={toggleDrawer('true', false)}
      >
        <JobModal id={jobId} handleSave={handleClick} handleClose={toggleDrawer('true', false)} />
      </Drawer>
    </>
  )
}
