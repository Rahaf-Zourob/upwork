import styled from "styled-components";

import Button from "@/components/atoms/Button";

import { colors } from "@/styles/colors";

export const EditButton =styled(Button)`
border: ${colors.border.inputBorder};
border-radius: 50%;
width: 32px;
height: 32px;
padding: 7px;
svg{
    fill: ${colors.palette.green};
    width: 100%;
    height: 100%;
}
`