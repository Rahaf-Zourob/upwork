"use client"

import styled from "styled-components";

import { BFLine } from "../BFLine";

import { StyleLink } from "@/styles/commen";
import { colors } from "@/styles/colors";

export const HaveAccount = styled(BFLine)`
margin-top: 80px;
span{
    width: 270%;
};
`;

export const SigninLink = styled(StyleLink)`
border: ${colors.border.green};
color: ${colors.palette.green};
text-align: center;
padding: 5px;
border-radius: 10rem;
width: 40%;
font-weight: 500;
margin: 0 auto;
`