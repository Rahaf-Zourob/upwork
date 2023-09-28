import styled from "styled-components";
import { colors } from "@/styles/colors";

export const BoxBackground = styled.div`
display: flex;
flex-direction: column;
position: absolute;
width: 245px;
height: 300px;
background: ${colors.palette.white};
top: 100%;
right: 40px;
  border-radius: 6px;
  box-shadow: 0 0 5px 2px ${colors.palette.gray5};
  padding: 10px;
  z-index: 5;
  img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    };
`;
export const ButtonWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 35px;
width: 100%;
border: ${colors.border.inputBorder};
border-radius: 10rem;
margin: 10px 0;
`
export const StatusButton = styled.button`
border: none;
outline: 0;
padding: 10px;
border-radius: 10rem;
width: 100%;
cursor: pointer;
transition: all .3s;
text-align: center;
${(props)=>props.isonline==='true' ? `
background: ${colors.palette.green};
color: ${colors.palette.white};
font-weight: 550;

` : `
background: ${colors.transparent};
color: ${colors.palette.green};
font-weight:450 ;`}
`;

export const ListBox = styled.ul`
padding-top: 10px;
display: flex;
flex-direction: column;
` 
export const ItemBox = styled.li`
display: flex;
align-items: center;
padding: 10px 20px;
cursor: pointer;
div{
  margin-right: 15px;
  svg{
    width: 20px;
    height: 20px;
  }
}
`