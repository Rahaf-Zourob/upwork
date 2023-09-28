"use client";

import { styled } from "styled-components";
import { colors } from "@/styles/colors";

export const StyleButton = styled.button`
font-weight: 600;
cursor: pointer;
font-size: 1rem;
display: inline-block;
text-align: center;
color:${colors.palette.white};
background: ${colors.transparent};
    ${(props) => `
        border-radius:${props.radius || "10rem"};   
        padding:${props.padding || "0.6rem"};
        border: ${props.border || colors.borderTransparent};
        width: ${props.width || '100%'};
`};
`;
export const CustomStyleButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
border: ${colors.borderTransparent};
    ${(props) => `
        gap: ${props.gap || '0'};
        border-radius: ${props.radiuswrap || '10rem'};
        ${props.paddingwrap && `padding: ${props.paddingwrap}`};
`}
`