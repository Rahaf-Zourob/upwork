import Button from "@/components/atoms/Button";
import { colors } from "@/styles/colors";
import { StyledFlexEquleSapces, StyledFlexPure } from "@/styles/commen";
import styled from "styled-components";

export const PaddingInfo = styled(StyledFlexEquleSapces)`
padding: 20px;
align-items: flex-start;
border-bottom: ${colors.border.card};
`
export const StyledFlex = styled(StyledFlexPure)`
gap:10px;
width: ${props=>props.width};
`
export const SettingBtn = styled(Button)`
background: ${colors.palette.green};
padding: 10px 30px;
font-weight: 500;
&:hover{
    background: ${colors.hover.green};
}
`
export const SeeProfile = styled(Button)`
border: 2px solid ${colors.palette.green};
color: ${colors.palette.green};
font-weight: 500;
padding: 10px 30px;
width: 115%;
&:hover{
    background: ${colors.palette.gray6};
}
`
export const UserStatus = styled.div`
width:18px;
height: 18px;
border-radius: 50%;
position: absolute;
left: 13.5rem;
top: 10rem;
border: 3px solid ${colors.palette.white};
${(props)=>props.isonline==='true' ? `
background: ${colors.palette.green};
` : `
background: ${colors.palette.gray1};
`}
`;
