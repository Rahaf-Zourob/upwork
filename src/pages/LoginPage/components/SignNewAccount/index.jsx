import React from 'react'

import { PATH } from '@/router/path'

import { HaveAccount, SigninLink } from './style'

export default function SignNewAccount() {
    return (
        <>
            <HaveAccount><span>Don't have an Upwork account?</span></HaveAccount>
            <SigninLink href={PATH.SIGNUP}>Sign Up</SigninLink>
        </>
    )
}
