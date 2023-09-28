'use client'

import styled from "styled-components"
import Link from "next/link";

import { colors } from "./colors";

export const StryledDiv = styled.div`
${(props) => `
    height: ${props.height || '100%'};
    width: ${props.width || '100%'};
    ${props.padding && `padding: ${props.padding}`};
    ${props.margin && `margin: ${props.margin}`};
    `};
`;
export const StyledDivCenter = styled(StryledDiv)`
display: flex;
align-items: center;
justify-content: center;
margin: 10% auto;
`;

export const StyledColumn = styled.div`
display: flex;
flex-direction: column;
${(props) => `
    gap: ${props.gap || 0};
    width: ${props.width || '100%'};
    ${props.height && `height: ${props.height}`};
`};
`;

export const StyledColumnCenter = styled(StyledColumn)`
justify-content: center;
align-items: center;
`

export const StyledFlexPure = styled.div`
display: flex;
align-items: center;
`;

export const StyleFlex = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
export const StyledFlexEquleSapces = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width: ${props=>props.width||"100%"}
` 


export const StyleBorder = styled.div`
border: ${colors.border.card};
${(props) => `
    border-radius: ${props.radius || '8px'};
    width: ${props.width || '40%'};
    ${props.padding && `padding: ${props.padding}`};
`};
`

export const StyledSvg = styled.div`
    --size: ${props=>props.size || '15px'};
    width: var(--size);
    height: var(--size);
    display: inline-block;
    margin-right: 10px;
    svg{
        color: ${props => props.color};
    };
`;
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: max-content;
`;

export const StyleLink = styled(Link)`
background: ${colors.transparent};
display: block;
text-align: center;
`
export const HoverLink =styled(StyleLink)`
&:hover{
    text-decoration: underline;
}
`