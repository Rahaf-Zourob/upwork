import styled from "styled-components"

import { BorderCard } from "@/components/atoms/BorderCard/style"
import Button from "@/components/atoms/Button"
import { colors } from "@/styles/colors"

export const JobWrap = styled(BorderCard)`
    margin: 3.5rem 0 9rem;
`
export const LoadMoreBtn = styled(Button)`
border: ${colors.border.green};
color: ${colors.palette.green};
border-radius: 10px/20px;
font-weight: 500;
width: 20%;
margin: 20px auto;
display: flex;
align-items: center;
justify-content: center;
overflow: visible;
&:hover{
    background: ${colors.palette.gray5};
}
`