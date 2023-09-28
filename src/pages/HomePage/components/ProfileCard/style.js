import { BorderCard } from "@/components/atoms/BorderCard/style";
import { Image } from "@/components/atoms/Imge/style";
import { colors } from "@/styles/colors";
import { HoverLink, StyleLink } from "@/styles/commen";
import styled from "styled-components";

export const BorderProfile = styled(BorderCard)`
width: 23%;
padding: 20px 30px;
height: 200px;
`
export const ProfilePhoto = styled.div`
cursor: pointer;
img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
`
export const ProfileName = styled(StyleLink)`
color: ${colors.palette.black};
text-decoration: underline;
margin: 15px 0 4px;
font-size: 20px;
font-weight: 450;
&:hover{
    color: ${colors.palette.green};
};
`
export const Connects = styled(HoverLink)`
  margin-top: 20px;
  font-weight: 600;
  text-align: left;
  color: ${colors.palette.green};
  &:hover {
    color: ${colors.hover.green};
  }
`;