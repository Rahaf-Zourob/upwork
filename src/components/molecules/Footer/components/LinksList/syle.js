import styled from "styled-components"

import { Body1 } from "@/components/atoms/Typography/style"
import { HoverLink, ListItem, StyleLink, StyledFlexEquleSapces, StyledFlexPure } from "@/styles/commen"
import { colors } from "@/styles/colors"

export const StyleFooterHome = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: ${colors.border.primaryBorder};
`

export const FlexWidth = styled(StyledFlexEquleSapces)`
    width: 82%;
`
export const FooterListColumn = styled.ul`
    display: flex;
    width: max-content;
    flex-direction: column;
    list-style: none;
    text-align: left;
    gap: 8px;
`
export const FooterListItem = styled(ListItem)`
    text-align: left;
    margin-left: 12px;
`

export const FooterListItemLink = styled(HoverLink)`
    font-size: 16px;
    font-weight: 300;
    text-align: left;
    color: ${colors.palette.white};
`
export const SocialLink = styled(StyleLink)`
    width: 40px;
    height: 40px;
    border: ${colors.border.social};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.palette.white};
    div{
        width: 50%;
        height: 50%;
    }
    &:hover{
        background: ${colors.hover.gray1};
    }
`
export const SocialHeader = styled(Body1)`
    color: ${colors.palette.white};
    font-weight: 300;
`
export const ListImgLinks = styled.ul`
    display:flex;
    align-items: center;
    margin: 20px;
`