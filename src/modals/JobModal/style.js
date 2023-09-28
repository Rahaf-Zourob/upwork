import { BorderCard } from "@/components/atoms/BorderCard/style";
import Button from "@/components/atoms/Button";
import { Body1, Body2, Body3, Body5, LightBody1 } from "@/components/atoms/Typography/style";
import { colors } from "@/styles/colors";
import { HoverLink, StyledColumn, StyledDivCenter, StyledSvg } from "@/styles/commen";
import styled from "styled-components";

export const JobLink = styled(HoverLink)`
color: ${colors.palette.green};
font-size: 16px;
font-weight: 500;
text-align: left;
&:hover{
    color: ${colors.hover.green};
}
`
export const JobBorder = styled(BorderCard)`
display: flex;
margin-bottom: 4rem;
`
export const PaddingDetails = styled.div`
width: 100%;
padding: 20px;
border-bottom: ${colors.border.card};
`

export const StyledColmanMargin = styled(StyledColumn)`
margin: 2rem 0 1rem;
`
export const PostTime = styled(Body2)`
color: ${colors.palette.gray3};
`
export const StyleFor = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
export const PriceLevel = styled.div`
display: flex;
gap: 3rem;
`
export const Space = styled.div`
display: flex;
gap: 8px;
width: 28%;
`
export const StyleSvg = styled(StyledSvg)`
svg{
    fill: ${colors.palette.darkBlue};
};
`
export const AboutJob = styled(StyledColumn)`
border-left: ${colors.border.card};
width: 40%;
`
export const Contntact = styled(Body3)`
font-weight: 300;
letter-spacing: -0.5px;
margin: 10px 0;
`
export const SaveBtn = styled.button`
gap: 10px;
padding: 0.5rem;
border-radius: 10rem;
width: 100%;
font-size: 16px;
outline: 0;
margin: 1rem 0 1.5rem;
display: flex;
align-items: center;
cursor: pointer;
justify-content: center;
background-color: ${colors.transparent};
border: 2px solid ${colors.palette.green};
color: ${colors.palette.green};
&:hover{
    background: ${colors.palette.gray6};
}
`
export const ApplayBtn = styled(Button)`
gap: 10px;
font-weight: 500;
background: ${colors.palette.green};
color: ${colors.palette.white};
&:hover{
    background: ${colors.hover.green};
}
`
export const FlagLink = styled(HoverLink)`
display: flex;
align-items: center;
color: ${colors.palette.green};
svg{
    fill: ${colors.palette.green};
}
&:hover{
    color: ${colors.hover.green}
}
`
export const Payment = styled.span`
display: flex;
align-items: center;
font-weight: 500;
margin: 15px 0 10px;
svg{
    fill: ${colors.palette.green};
};
`
export const Reviews = styled.p`
display: flex;
align-items: center;
font-size: 14px;
color: ${colors.palette.gray3};
font-weight: 350;
`
export const StyleOpenPage = styled(FlagLink)`
width: 30%;
font-weight: 450;
`