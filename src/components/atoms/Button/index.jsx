import React from 'react'
import styled from 'styled-components'

import { CustomStyleButton, StyleButton } from './style'
import { StyledSvg } from '@/styles/commen'

export default function Button({ src,imgSvg, onClick, icon, children, ...style }) {
    return (
        <>
            {icon ? (
                <CustomStyleButton onClick={onClick} {...style}>
                    {src ? <ImageButton src={src} alt="button image" />
                    :
                    <StyledSvg>{imgSvg}</StyledSvg>
                }
                    <StyleButton><span>{children}</span></StyleButton>
                </CustomStyleButton>
            ) : (
                <StyleButton {...style} onClick={onClick}>
                    {children}
                </StyleButton>
            )}
        </>

    )
}

export const ImageButton = styled.img`
    margin: 0 1.5px;
    border-radius: 50%;
`