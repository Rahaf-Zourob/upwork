import styled from "styled-components";

import Button from "@/components/atoms/Button";

import { colors } from "@/styles/colors";
import { StyleFlex } from "@/styles/commen";

export const EditButton =styled(Button)`
border: ${colors.border.inputBorder};
border-radius: 50%;
width: 32px;
height: 32px;
padding: 7px;
svg{
    fill: ${colors.palette.green};
    width: 100%;
    height: 100%;
}
`
export const StyleBtn = styled(StyleFlex)`
justify-content: flex-end;
gap: 10px;
margin-top: 80px;
`
export const SendBtn = styled(Button)`
width: 15%;
background-color: ${colors.palette.green};
&:hover{
    background-color: ${colors.hover.green};
}
`
export const CancleBtn = styled(Button)`
width: 10%;
font-weight: 450;
color: ${colors.palette.green};
&:hover{
    text-decoration: underline;
}
`
