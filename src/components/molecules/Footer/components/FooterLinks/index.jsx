'use client'
import React from 'react'
import LinksList from '../LinksList'
import { FooterList1, FooterList2, FooterList3, FooterList4, MobileAppLinks, SocialLinks } from '@/mock/footerLinks'
import { StyledFlexEquleSapces } from '@/styles/commen'
import { FlexWidth, ListImgLinks, SocialHeader, StyleFooterHome } from '../LinksList/syle'

export default function FooterLinks() {
    return (
        <StyleFooterHome>
            <FlexWidth>
                <LinksList links={FooterList1} />
                <LinksList links={FooterList2} />
                <LinksList links={FooterList3} />
                <LinksList links={FooterList4} />
            </FlexWidth>
            <StyledFlexEquleSapces>
                <ListImgLinks>
                    <SocialHeader>Follow us</SocialHeader>
                    <LinksList img links={SocialLinks} />
                </ListImgLinks>
                <ListImgLinks>
                    <SocialHeader>Mobile app</SocialHeader>
                    <LinksList img links={MobileAppLinks} />
                </ListImgLinks>
            </StyledFlexEquleSapces>
        </StyleFooterHome>
    )
}
