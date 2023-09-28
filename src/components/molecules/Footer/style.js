import styled from "styled-components";

import { HoverLink, StyleLink } from "@/styles/commen";
import { colors } from "@/styles/colors";

export const BgFooter = styled.div`
    width: 100%;
    margin-bottom:20px ;
    border-radius: 8px;
    padding: 50px 60px;
    background: ${colors.palette.darkGreen};
`;
export const CopyRight = styled.p`
    width: 100%;
    margin: 20px auto;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: ${colors.palette.white};
`
export const PrivcyLink = styled(HoverLink)`
font-size: 11px;
color: ${colors.palette.white};
`
