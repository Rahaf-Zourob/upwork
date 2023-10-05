"use client"
import React, { useState } from 'react'
import Footer from '@/components/molecules/Footer'
import { InputData, skills } from '@/mock/addData'
import { StyledColumn, StyledFlexPure } from '@/styles/commen'
import { DataButton, DataCard, Label } from './style'
import Input from '@/components/atoms/Input'
import { useForm } from 'react-hook-form'
import { DataSchema } from '@/validation/data'
import { PATH } from '@/router/path'
import { Body5, H3 } from '@/components/atoms/Typography/style'
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '@/components/atoms/Form'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '@/redux/slices/profile'
import Error from '@/components/atoms/Error'
import Select from 'react-select'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/atoms/Container/style'
import TextArea from '@/components/atoms/TextArea'


export default function AddProfileData() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(DataSchema())
    });
    const router = useRouter();
    const { object, isLoading } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [selectedSkill, setSelectedSkill] = useState([]);

    const handleSendRequest = async (data) => {
        const selectedValues = selectedSkill
          ? selectedSkill.map((option) => ({ label: option.label, value: option.value }))
          : [];
        dispatch(addData({ data, skills: selectedValues }))
        router.push(PATH.HOME);
      };
    
    return (
        <Container>
            <DataCard >
                <H3>Enter your profile information</H3>
                <Form handleSubmitForm={handleSubmit(handleSendRequest)}>
                    <StyledColumn gap='1.25rem' style={{ "marginTop": "20px" }}>
                        {InputData.map((input) => (
                            <React.Fragment key={input.id}>
                                <StyledFlexPure>
                                    <Label htmlFor={input.id}>{input.label}:</Label>
                                    {input.type === 'text' ?
                                        <Input
                                            padding='20px'
                                            placeholder={input.placeholder}
                                            id={input.id}
                                            name={input.id}
                                            register={register}
                                            type={input.type}
                                        /> : <StyledColumn>
                                            <TextArea
                                                placeholder={input.placeholder}
                                                id={input.id}
                                                name={input.id}
                                                register={register}
                                                maxLen={500}
                                            />
                                            <Body5 style={{ marginTop: "3px" }}>Max character 500</Body5>
                                        </StyledColumn>}
                                </StyledFlexPure>
                                {errors[input.id] && <Error>{errors[input.id].message}</Error>}
                            </React.Fragment>

                        ))}
                        <Select className="basic-multi-select"
                            isMulti
                            classNamePrefix="select" options={skills}
                            onChange={(selectedOption) => setSelectedSkill(selectedOption)}
                        />
                        <DataButton>{!isLoading ? 'Loading...':'Send'}</DataButton>
                    </StyledColumn>
                </Form>
            </DataCard>
            <Footer />
        </Container>
    )
}
