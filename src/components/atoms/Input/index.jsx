import React, { useState } from 'react';

import { HidePassword, ShowPassword } from '@/svg/InputImage';

import { InputWrap, InputWrapPassword, StyleInput, StyleLabel } from './style'; 
import { StyledColumn, StyledSvg } from '@/styles/commen';
import { colors } from '@/styles/colors';

export default function Input({
  name,
  imgSvg,
  id,
  placeholder,
  register,
  type,
  children,
  withIcon,
  padding,
  paddingwrap, 
  color,
  err,
  value,
  handleChange,
  disable
}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisiblePassword = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {withIcon ? (
        <>
          {type === 'password' ? (
            <InputWrapPassword
              style={{
                border: err ? colors.border.red : colors.border.inputBorder,
              }}
              paddingwrap={paddingwrap || '10px'} 
            >
              <StyledSvg color={color || colors.palette.black} onClick={handleVisiblePassword}>
                {isVisible ? ShowPassword : HidePassword}
              </StyledSvg>
              <StyleInput
                placeholder={placeholder}
                name={name}
                id={id}
                type={isVisible ? 'text' : 'password'}
                {...register(id)}
                padding={padding || '0.2rem'}
              />
            </InputWrapPassword>
          ) : (
            <InputWrap
              style={{
                border: err ? colors.border.red : colors.border.inputBorder,
              }}
              paddingwrap={paddingwrap || '10px'}
            >
              <StyledSvg>{children}</StyledSvg>
              <StyleInput
                placeholder={placeholder}
                name={name}
                id={id}
                type={type}
                {...register(id)}
                padding={padding || '0.2rem'}
              />
            </InputWrap>
          )}
        </>
      ) : (
          <InputWrap
            style={{
              border: err ? colors.border.red : colors.border.inputBorder,
            }}
          >
            <StyleInput
              placeholder={placeholder}
              name={name}
              id={id}
              type={type}
              value={value}
              {...(register && register(id))}
              padding={padding || '0.2rem'}
              onChange={handleChange}
              disabled={disable}
            />
          </InputWrap>
      )}
    </>
  );
}
