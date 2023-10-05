'use client'
'use client'
import React from 'react'
import Footer from '@/components/molecules/Footer'
import MainHeader from '@/components/molecules/MainHeader'

import { Container } from '@/components/atoms/Container/style'

export default function MainLayout({ children }) {
    return (
        <>
            <MainHeader />
            <Container style={{width:"80%"}}>
                {children}
            </Container>
            <Footer />
        </>
    )
}
