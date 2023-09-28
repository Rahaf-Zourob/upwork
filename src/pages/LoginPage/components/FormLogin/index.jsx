"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import Button from '@/components/atoms/Button';
import { BFLine } from '../BFLine';
import Error from '@/components/atoms/Error';
import Form from '@/components/atoms/Form';
import Input from '@/components/atoms/Input';

import useAuth from '@/hooks/useAuth';

import { EmailImage, PasswordHide } from '@/svg/InputImage';
import { LoginSchema } from '@/validation/login';

import { colors } from '@/styles/colors';
import { StyledColumn } from '@/styles/commen';
import { H3 } from '@/components/atoms/Typography/style';

export default function FormLogin() {
  const { login, isLoading, role, error } = useAuth();
  const [err, setError] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema())
  });
  const router = useRouter();
  const handleSendRequest = async (data) => {
    login(data);
  };
  useEffect(() => {
    if (Object.keys(errors).length > 0) setError(true);
    else setError(false);
  }, [errors]);
  return (
    <>
      <FormHead>Log in to Upwork</FormHead>
      <Form handleSubmitForm={handleSubmit(handleSendRequest)}>
        <StyledColumn gap='0.5rem'>
          <Input withIcon
            padding='0.3rem'
            register={register}
            name='email'
            type='text'
            id='email'
            placeholder='Email'
            err={error}
          >{EmailImage}</Input>
          {errors.email && <Error>{errors.email.message}</Error>}
          <Input withIcon
            padding='0.3rem'
            register={register}
            name='password'
            type='password'
            id='password'
            placeholder='Password'
            err={error}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
          {error && <Error>{error}</Error>}
          <ButtonFormLogin>{isLoading ? 'Loading...' : 'Log in'}</ButtonFormLogin>
        </StyledColumn>
      </Form>
      <BFLine><span>or</span></BFLine>
    </>
  )
}

export const ButtonFormLogin = styled(Button)`
  background: ${colors.palette.green};
  margin-top: 1rem;
  &:hover{
    background: ${colors.hover.green};
  };
`;

export const FormHead = styled(H3)`
  text-align: center;
  margin: 2rem 0;
`