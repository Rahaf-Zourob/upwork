import { colors } from "@/styles/colors";
import { StyleFlex, StyledColumn, StyledFlexEquleSapces } from "@/styles/commen";
import styled from "styled-components";

export const SideBar = styled(StyledColumn)`
height: 100%;
gap: 20px;
padding: 40px 25px;
border-right: ${colors.border.card};
width: 100%;
`
export const TitleBar = styled(StyleFlex)`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
h5{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: max-content;
    gap: 8px;
};
`
