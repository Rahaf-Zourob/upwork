import styled from "styled-components";

import Button from "@/components/atoms/Button";

import { BorderCard } from "@/components/atoms/BorderCard/style";
import { colors } from "@/styles/colors";

export const DataCard = styled(BorderCard)`
padding: 25px;
margin: 60px 0;
overflow: visible;
`
export const Label = styled.label`
display: block;
width: 30%;
font-size: 18px;
font-weight: 450;
color: ${colors.palette.darkGreen};
`
export const DataButton = styled(Button)`
background: ${colors.palette.green};
&:hover{
    background: ${colors.hover.green};
}
`