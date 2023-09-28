"use client"
import AuthHeadr from '@/components/molecules/AuthHeader'
import FormSignup from './components/FormSignup'
import { StyleBorder, StyledDivCenter } from '@/styles/commen'
import ButtonLogin from '../LoginPage/components/ButtonLogin'
import { H2 } from '@/components/atoms/Typography/style'
import styled from 'styled-components'
import { BFLine } from '../LoginPage/components/BFLine'
export default function SignupPage() {
  return (
    <main>
     <AuthHeadr signup/>
    <StyledDivCenter>
        <StyleBorder padding='1rem 3rem 4rem' width='60%'>
        <FormHead>Sign up to find work you love</FormHead>
            <ButtonLogin />
            <BFLine><span>or</span></BFLine>
            <FormSignup />
        </StyleBorder>
    </StyledDivCenter>
    </main>
  )
}
export const FormHead = styled(H2)`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-align: center;
    margin: 2rem 0;
  `