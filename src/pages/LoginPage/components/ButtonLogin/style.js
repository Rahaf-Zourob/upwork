"use client"

import styled from "styled-components";

import Button from "@/components/atoms/Button";
import { colors } from "@/styles/colors";

export const GoogleBtn = styled(Button)`
background: ${colors.palette.blue};
&:hover{
    background: ${colors.hover.blue};
};
`
export const AppleBtn = styled(Button)`
padding: 0 38px;
border: ${colors.border.dark};
background: ${colors.palette.white};
button{
    width: 50%;
    padding: 0.6rem 0;
}
span{
    color: ${colors.palette.black};
}
div{
    margin-right: 0;
}
`;

