"use client"
import { StyledSvg } from '@/styles/commen'
import { colors } from '@/styles/colors'
import { CheckboxTrue } from '@/svg/InputImage'
import { checkCustomRoutes } from 'next/dist/lib/load-custom-routes'
import React, { useState } from 'react'
import styled from 'styled-components'

export default function CheckboxInput({name, id,register,children,check}) {
  const [isChecked, setIsChecked] = useState(check?true:false);
      return (
        <ChexboxWrap>
        <input type='checkbox'
        checked={isChecked}
        onClick={() => setIsChecked((prev) => !prev)}
        name={name} id={id}  
        {...(register && register(id))}
        />
        <label htmlFor={id}>{children}</label>
        </ChexboxWrap>
        )
      } 

export const ChexboxWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  width: 100%;
  border-radius: 8px;
  input[type='checkbox']{
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 6px;
    border: ${colors.border.inputBorder};
  }
    input[type='checkbox']:checked{
        border: none;
        background: ${colors.palette.green};
      }
      label{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        cursor: pointer;
        width: 100%;
      }
      `