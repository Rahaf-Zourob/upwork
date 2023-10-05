'use client'
import React from 'react'
import { FooterListColumn, FooterListItem, FooterListItemLink, ListImgLinks, SocialLink } from './syle'

export default function LinksList({ img, links }) {
    return (
        <>
            {
                img ?
                    (<ListImgLinks>
                        {
                            links.map((item) => (
                                <FooterListItem key={item.id}><SocialLink href={item.href}><div>{item.item}</div></SocialLink></FooterListItem>
                            ))
                        }</ListImgLinks >)
                    : (<FooterListColumn>
                        {links.map((item) => (
                            <FooterListItem key={item.item}>
                                <FooterListItemLink href={item.href}>{item.item}</FooterListItemLink>
                            </FooterListItem>
                        ))}
                    </FooterListColumn >)}
        </>
    )
}
