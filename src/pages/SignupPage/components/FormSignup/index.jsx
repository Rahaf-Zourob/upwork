"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

import Input from '@/components/atoms/Input';
import Form from '@/components/atoms/Form';
import CheckboxInput from '@/components/atoms/Checkbox';
import Error from '@/components/atoms/Error';

import useAuth from '../../../../hooks/useAuth';

import { PATH } from '@/router/path';
import { SignupSchema } from '@/validation/signup'
  ;
import { StyledColumn } from '@/styles/commen';
import { AlreadyHaveAccount, ArgumentLink, ButtonFormLogin, LoginLink, Space } from './style';

export default function FormSignup() {
  const { signup, isLoading } = useAuth();
  const [error, setError] = useState(false);
  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(SignupSchema())
  });
  const router = useRouter();
  const handleSendRequest = async (data) => {
    signup(data)
    router.push(PATH.Data);
  };
  useEffect(() => {
    if (Object.keys(errors).length > 0) setError(true);
    else setError(false);
  }, [errors]);
  return (
    <>
      <Form handleSubmitForm={handleSubmit(handleSendRequest)}>
        <StyledColumn gap='1rem'>
          <Space>
            <StyledColumn>
              <Input
                padding='15px'
                register={register}
                name='firstName'
                type='text'
                id='firstName'
                placeholder='First Name'
                err={error}
              />
              {errors.firstName && <Error err>{errors.firstName.message}</Error>}
            </StyledColumn>
            <StyledColumn>
              <Input
                padding='15px'
                register={register}
                name='lastName'
                type='text'
                id='lastName'
                placeholder='Last Name'
                err={error}
              />
              {errors.lastName && <Error err>{errors.lastName.message}</Error>}
            </StyledColumn>
          </Space>
          <StyledColumn>
            <Input
              padding='15px'
              register={register}
              name='email'
              type='text'
              id='email'
              placeholder='Email'
              err={error}
            />
            {errors.email && <Error err>{errors.email.message}</Error>}
          </StyledColumn>
          <StyledColumn>
            <Input
              withIcon
              padding='15px'
              register={register}
              name='password'
              type='password'
              id='password'
              placeholder='Password (8 or more characters)'
              err={error}
            />
            {errors.password && <Error err>{errors.password.message}</Error>}
          </StyledColumn>
          <CheckboxInput
            check={true}
            name='sendHelp' id='sendHelp' register={register} >
            Send me helpful emails to find rewarding work and job leads.</CheckboxInput>
          <StyledColumn>
            <CheckboxInput register={register} name='argument' id='argument'>
              Yes, I understand and agree to the <ArgumentLink href='#'>Upwork Terms of Service</ArgumentLink> , including the
              <ArgumentLink href='#'>User Agreement</ArgumentLink>and<ArgumentLink href='#'>Privacy Policy</ArgumentLink>.
            </CheckboxInput>
            {errors.argument && <Error err>{errors.argument.message}</Error>}
          </StyledColumn>
          <ButtonFormLogin>{isLoading ? 'Loading...' : 'Create my account'}</ButtonFormLogin>
        </StyledColumn>
      </Form>
      <AlreadyHaveAccount>Already have an account?
        <LoginLink href={PATH.LOGIN}>Log In</LoginLink>
      </AlreadyHaveAccount>
    </>
  )
}