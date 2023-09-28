"use client"

import styled from "styled-components";

import { colors } from "@/styles/colors";

export const H2 = styled.h2`
font-size: 32px;
font-weight: 500;
color: ${colors.palette.black};
`;

export const H3 = styled.h3`
font-size: 1.75rem;
font-weight: 500;
color: ${colors.palette.black};
`
export const H4 = styled.h4`
font-size: 1.2rem;
font-weight: 550;
color: ${colors.palette.black};
`
export const H5 = styled.h5`
font-size: 18px;
font-weight: 400;
color: ${colors.palette.black};
`
export const H6 = styled.h6`
font-size: 17px;
font-weight: 400;
color: ${colors.palette.black};
`

export const Body1 = styled.p`
font-size: 16px;
font-weight: 500;
color: ${colors.palette.black};
`
export const LightBody1 = styled(Body1)`
font-weight: 400;
`
export const Body2 = styled.p`
font-size: 14px;
font-weight: 400;
color: ${colors.palette.black};
`
export const Body3 = styled.p`
font-size: 15px;
font-weight: 400;
color: ${colors.palette.black};
`
export const Body5 = styled.p`
font-size: 12px;
font-weight: 400;
color: ${colors.palette.gray1};
span{
    color: ${colors.palette.black};
}
`
export const Body6 = styled.p`
font-size: 13px;
font-weight: 400;
color: ${colors.palette.black};
span{
    font-size: 12px;
    font-weight: 400;
    color: ${colors.palette.gray1};
}
`