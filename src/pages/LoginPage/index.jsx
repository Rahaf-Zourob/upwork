"use client"

import React from 'react'

import Form from '@/components/atoms/Form'
import FormLogin from './components/FormLogin'
import ButtonLogin from './components/ButtonLogin'
import AuthHeadr from '@/components/molecules/AuthHeader'
import Footer from '@/components/molecules/Footer'
import SignNewAccount from './components/SignNewAccount'

import { StyleBorder, StyledDivCenter } from '@/styles/commen'

export default function LoginPage () {
    
  return (
    <main>
    <AuthHeadr/>
    <StyledDivCenter>
        <StyleBorder padding='1rem 3rem 4rem'>
            <FormLogin />
            <ButtonLogin />
            <SignNewAccount />
        </StyleBorder>
    </StyledDivCenter>
    <Footer login/>
    </main>
  )
}
