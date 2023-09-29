import { H4 } from '@/components/atoms/Typography/style'
import { StyledColumnCenter } from '@/styles/commen'
import React from 'react'

export default function NoJob({match}) {
  return (
    <StyledColumnCenter gap='1rem'>
        <img src='/assets/savedJobs.png' alt='no jobs here' />
        <H4 style={{"margin": "1rem 0"}}>{match? "No jobs matches your skills":"No saved jobs here"}</H4>
    </StyledColumnCenter>
  )
}
