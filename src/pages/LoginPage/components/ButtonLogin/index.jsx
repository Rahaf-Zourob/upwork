"use client"

'use client'
import React from 'react'
import { BFLine } from '../BFLine'
import { AppleImage } from '@/svg/InputImage'

import { StyledColumn } from '@/styles/commen'
import { AppleBtn, GoogleBtn } from './style'

export default function ButtonLogin() {
  return (
      <StyledColumn gap='0.5rem'>
        <GoogleBtn icon src='/assets/google.svg'>Continue with Google</GoogleBtn>
        <AppleBtn icon imgSvg={AppleImage}> Continue with Apple</AppleBtn>
      </StyledColumn>
  )
}
