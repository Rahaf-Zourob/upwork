import { BorderCard } from "@/components/atoms/BorderCard/style";
import Button from "@/components/atoms/Button";
import { colors } from "@/styles/colors";
import styled from "styled-components";

export const DataCard = styled(BorderCard)`
padding: 25px;
margin: 60px 0;
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