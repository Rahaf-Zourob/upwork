import styled from "styled-components";

import { colors } from "@/styles/colors";

export const StyleTextArea = styled.textarea`
border: ${colors.border.inputBorder};
outline: 0;
color: ${colors.palette.gray1};
width: 100%;
height: max-content;
padding: 20px;
font-size: 16px;
&:focus {
    color: ${colors.palette.black};
}
`