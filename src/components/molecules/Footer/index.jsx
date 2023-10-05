'use client'
import React from 'react'
import { BgFooter, CopyRight, PrivcyLink } from './style'
import { ContainerLayOut } from '@/components/atoms/ContainerLayOut/style'
import FooterLinks from './components/FooterLinks'

export default function Footer({login}) {
  return (
    <footer>
      <ContainerLayOut>
        <BgFooter>
          {login ? '' : <FooterLinks />}
        <CopyRight>
        © 2015 - 2023 Upwork® Global Inc.•  
        {login &&  <PrivcyLink href='#'>Privacy Policy</PrivcyLink>}
        </CopyRight>
    </BgFooter>
    </ContainerLayOut>
    </footer>
  )
}
