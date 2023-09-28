import { H4 } from '@/components/atoms/Typography/style'
import { StyledColumnCenter } from '@/styles/commen'
import React from 'react'

export default function NoRecent() {
  return (
    <StyledColumnCenter gap='1rem'>
        <img src='/assets/savedJobs.png' alt='no jobs here' />
        <H4 style={{"margin": "1rem 0"}}>No jobs that match your experience to a client's hiring preferences</H4>
    </StyledColumnCenter>
  )
}
