import styled from "styled-components"

import Button from "@/components/atoms/Button"

import { colors } from "@/styles/colors"
import { Body2 } from "@/components/atoms/Typography/style"
import { StyledColumn, StyledFlexPure } from "@/styles/commen"

export const JobDetailes = styled(StyledColumn)`
    padding: 20px 30px;
    border-bottom: ${colors.border.card};
    cursor: pointer;
    &:hover{
      background: ${colors.palette.gray6};
    }
`
export const HoverButton = styled.button`
padding: 0 0 30px;
text-align: left;
font-weight: 400;
font-size: 18px;
border: 0;
outline: 0;
background: ${colors.transparent};
color: ${colors.palette.black};
&:hover{
    text-decoration: underline;
    color: ${colors.palette.green};
};
`
export const Description = styled(Body2)`
  padding: 20px 0;
`
export const GapFlex = styled(StyledFlexPure)`
  gap:10px;
`
export const SvgLocation = styled.div`
svg{
  width: 13px;
  height: 13.5px;
  fill: ${colors.palette.gray1};
  }
`
export const SaveJobBtn = styled(Button)`
  width: 40px;
  height: 38px;
  border: ${colors.border.inputBorder};
  border-radius:50%;
  background: ${colors.palette.white};
  svg{
    width: 15px;
    height: 15px;
    fill: ${colors.palette.green};
  }
  &:hover{
    background: ${colors.palette.gray5}; 
  }
`