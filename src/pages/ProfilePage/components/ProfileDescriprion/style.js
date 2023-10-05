import styled from "styled-components";

import { colors } from "@/styles/colors";
import { HoverLink, StyleFlex, StyledFlexEquleSapces } from "@/styles/commen";

export const StylePadding = styled.div`
width: 100%;
padding: 20px;
border-bottom: ${colors.border.card}; 
`
export const Title = styled(StyledFlexEquleSapces)`
margin-bottom: 15px;
`
export const TitleJob = styled.div`
max-width: 60%;
    div{
        display: inline;
    }
`
export const TitleHour = styled(StyledFlexEquleSapces)`
width:20%;
h4{
    display: flex;
    align-items: center;
    width: 20%;
    gap: 8px;
};
`
export const AddTo = styled(HoverLink)`
font-weight: 550;
padding-top: 5px;
color: ${colors.palette.green};
&:hover{
    color: ${colors.hover.green}
};
`
export const EditRate = styled(StyleFlex)`
margin: 40px 0 0;
`