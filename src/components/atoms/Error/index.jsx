"use client"
import React from "react";
import styled from "styled-components";

import { ErrorLoginInput, ErrorRegisterInput } from "@/svg/InputImage";

import { Body1 } from "../Typography/style";
import { colors } from "@/styles/colors";

export default function Error({ children,err }) {
    return (
        <StlyError>
            <StyledIcon>{err ? ErrorRegisterInput : ErrorLoginInput}</StyledIcon> 
            <Body1>{children}</Body1>
        </StlyError>
    )
}

export const StlyError = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${colors.palette.red};
    border-radius: 8px;
    text-align: center;
    margin-top: 10px;
    p{
        color: ${colors.palette.red};
    };
`;

export const StyledIcon = styled.div`
    --size: 15px;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    margin-right: 10px;
    svg{
        color: ${colors.palette.red};
    }
`