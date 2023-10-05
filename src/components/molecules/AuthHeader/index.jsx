'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { LogoImge } from '@/svg/Logo'
import { PATH } from '@/router/path'

import { FixedHeader, JoinLink, LeftHeaderSide, StyleLogo } from './style'
import { ContainerLayOut } from '@/components/atoms/ContainerLayOut/style'
import { Body2 } from '@/components/atoms/Typography/style'
import { StyledFlexEquleSapces } from '@/styles/commen'

export default function AuthHeadr({ signup }) {
  const router = useRouter()
  return (
    <header>
      <FixedHeader>
      <ContainerLayOut>
        <StyledFlexEquleSapces>
          <StyleLogo onClick={()=>router.push(PATH.LOGIN)}>{LogoImge}</StyleLogo>
          {signup &&
            <LeftHeaderSide>
              <Body2>Here to hire talent?</Body2>
              <JoinLink href='#'>Join as a Client</JoinLink>
            </LeftHeaderSide>
          }
        </StyledFlexEquleSapces>
      </ContainerLayOut>
    </FixedHeader>
    </header>
  )
}
