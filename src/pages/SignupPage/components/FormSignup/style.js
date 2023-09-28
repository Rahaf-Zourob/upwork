import styled from "styled-components"

import Button from "@/components/atoms/Button"

import { HoverLink, StyledFlexEquleSapces } from "@/styles/commen"
import { Body3 } from "@/components/atoms/Typography/style"
import { colors } from "@/styles/colors"

export const Space = styled(StyledFlexEquleSapces)`
    gap:1rem;
`
export const ArgumentLink = styled(HoverLink)`
    font-size: 14px;
    margin: 0 4px;
    color: ${colors.palette.green};
`
export const AlreadyHaveAccount = styled(Body3)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    margin-top: 35px;
`
export const LoginLink = styled(HoverLink)`
    font-weight: 600;
    font-size: 16px;
    color: ${colors.palette.green};
`
export const ButtonFormLogin = styled(Button)`
    background: ${colors.palette.green};
    margin-top: 1rem;
    &:hover{
    background: ${colors.hover.green};
    };
`;