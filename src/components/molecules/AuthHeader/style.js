import styled from "styled-components";

import { colors } from "@/styles/colors";

import { HoverLink, StyledFlexPure } from "@/styles/commen";
import { Header } from "../MainHeader/style";

export const FixedHeader = styled(Header)`
position: fixed;
top: 0;
`;

export const StyleLogo = styled.div`
width: 10%;
height: 40%;
display: flex;
margin-top: 10px;
cursor: pointer;
`;

export const JoinLink =styled(HoverLink)`
font-weight: 500;
color: ${colors.palette.green};
&:hover{
    color: ${colors.hover.green};
};
`
export const LeftHeaderSide = styled(StyledFlexPure)`
gap: 2px
`