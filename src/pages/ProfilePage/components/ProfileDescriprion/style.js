import { colors } from "@/styles/colors";
import { HoverLink, StyledFlexEquleSapces } from "@/styles/commen";
import styled from "styled-components";

export const StylePadding = styled.div`
width: 100%;
padding: 20px;
border-bottom: ${colors.border.card}; 
`
export const Title = styled(StyledFlexEquleSapces)`
margin-bottom: 15px;
h4{
    display: flex;
    align-items: center;
    width: 20%;
    gap: 8px;
};
h3{
    display: flex;
    align-items: center;
    width: 70%;
    gap: 8px;
};
`
export const AddTo = styled(HoverLink)`
font-weight: 550;
padding-top: 5px;
color: ${colors.palette.green};
&:hover{
    color: ${colors.hover.green}
}
`