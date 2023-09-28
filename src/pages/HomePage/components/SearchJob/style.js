import styled from "styled-components"

import { colors } from "@/styles/colors"
import { HoverLink } from "@/styles/commen"

export const SearchWrap = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    height: 40px;
    width: 100%;
    margin: 60px 0 8px;
`
export const SearchButton = styled.button`
width: 5%;
height: 100%;
border: 0;
outline: none;
margin-left: -5px;
background: ${colors.palette.green};
border-radius: 0;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
    svg{
        width: 15px;
        height: 15px;
        fill: ${colors.palette.white}
    }
`
export const SearchInput = styled.input`
border: ${colors.border.card};
outline: 0;
border-radius: inherit;
width: 100%;
padding: 5px 0 5px 10px;
font-size: 16px;
height: 100%;
color: ${colors.palette.gray1};
    &:focus{
        border: ${colors.border.inputBorder};
        color: ${colors.palette.black};
    };
`
export const RecentSearch = styled(HoverLink)`
color: ${colors.palette.green};
font-weight: 550;
margin-left: 4px;
`