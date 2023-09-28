import { styled } from "styled-components";

import { colors } from "@/styles/colors";

export const Horizantial = styled.hr`
    width: 100%;
    height: 1px;
    border: ${colors.border.primaryBorder};
    margin: ${props => props.margin || '0'}
`