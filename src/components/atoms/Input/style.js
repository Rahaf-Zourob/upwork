import styled from "styled-components";

import { colors } from "@/styles/colors";

export const InputWrap = styled.div`
display: flex;
align-items: center;
font-weight: 400;
${(props)=>`
width: ${props.width || '100%'};
height: ${props.height || '100%'};
border-radius: ${props.radius || '8px'};
padding: ${props.paddingwrap};
`};
`;

export const InputWrapPassword = styled(InputWrap)`
flex-direction: row-reverse;
input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
  display: none;
};
`

export const StyleInput = styled.input`
appearance: none;
outline: none;
width: 100%;
height: 100%;
display: block;
color: ${colors.palette.gray1};
font-size: 14px;
${(props)=>`
padding: ${props.padding};
border: ${props.border || '0'};
border-radius: ${props.radius || '8px'};
`};
&:focus {
    color: ${colors.palette.black};
}
&:disabled {
  pointer-events:none;
  color:${colors.palette.gray1};
  background: ${colors.palette.gray5};
}
`;

export const StyleLable = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.05px;
    color: ${colors.palette.black};
    span{
      font-size: 12px;
      letter-spacing: 0px;
      display: flex;
      align-items: center;
      width: max-content;
    }
`