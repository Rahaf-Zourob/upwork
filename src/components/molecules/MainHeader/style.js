import styled from "styled-components";

import { colors } from "@/styles/colors";

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 64px;
background: ${colors.palette.white};
z-index: 1;
position: relative;
padding: 10px 0;
`