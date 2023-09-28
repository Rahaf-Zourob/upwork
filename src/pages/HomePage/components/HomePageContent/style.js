import styled from "styled-components";

import { colors } from "@/styles/colors";

export const ScrollTop = styled.button`
    border-radius: 2rem;
    border: ${colors.border.green};
    background: ${colors.palette.white};
    position: fixed;
    bottom: 20px;
    right: 40px;
    padding: 10px 20px;
    cursor: pointer;
`
export const MainSection = styled.div`
width: 80%;
`