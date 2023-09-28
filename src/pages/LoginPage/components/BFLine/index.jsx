"use client"
import styled from "styled-components";

import { colors } from "@/styles/colors";

export const BFLine = styled.p`
  width: 100%;
  margin: 35px auto;
  color: ${colors.palette.gray3};
  display: flex;
  align-items: center;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: ${colors.palette.gray2};
  }
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: ${colors.palette.gray2};
  }
  span{
    padding: 0 0.6rem;
  }
`;