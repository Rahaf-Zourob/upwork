"use client";

import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Autocomplete, Chip, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { editJobDescription, editJobTitle, editHourPrice, editSkills, getData } from "@/redux/slices/profile";
import { priceSchema } from "@/validation/profile";

import { ReciveRate } from "@/svg/ProfileImages";

import Loading from "@/pages/loading";
import Form from "@/components/atoms/Form";
import Input from "@/components/atoms/Input";
import Error from "@/components/atoms/Error";
import TextArea from "@/components/atoms/TextArea";
import { Horizantial } from "@/components/atoms/Horizintal";

import { HourRateModal, JobDescriptionModal, JobTitleModal, ProfileModal } from "@/modals/ProfileModals";

import { skills } from '@/mock/addData'

import { StyleLable } from "@/components/atoms/Input/style";
import { H3, H5, LightBody1, H4, Body5, Body2, Body3 } from "@/components/atoms/Typography/style";
import { AddTo, StylePadding, Title, TitleHour, TitleJob } from "./style";
import { StyleFlex, StyledColumn, StyledColumnCenter, StyledFlexEquleSapces, StyledFlexPure, } from "@/styles/commen";
import { GapFlex } from "@/pages/HomePage/components/Jobs/components/JobCard/style";
import { colors } from "@/styles/colors";

export default function ProfileDescription() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(priceSchema())
  });
  const { object, isLoading, jobTitle,jobDescription } = useSelector((state) => state.profile);
  const [newHourPrice, setNewHourPrice] = useState(0)
  const [newJobTitle, setNewJobTitle] = useState(null);
  const [newJobDescription, setNewJobDescription] = useState(null)
  const [count, setCount] = useState(object?.data?.jobDescription?.length);
  const [userSkills, setUserSkills] = useState([]);
  const [recive, setReacive] = useState(0)

  useEffect(() => {
    dispatch(getData(id));
    setUserSkills(object?.skills)
    setNewJobTitle(object?.data.jobTitle)
    setNewHourPrice(object?.data.price)
    setNewJobDescription(object?.data.jobDescription)
    setReacive(object?.data.price * 0.9)
  }, []);

  const handleChangeHourPrice = (e) => {
    setNewHourPrice(e.target.value);
    setReacive((e.target.value * 0.9).toFixed(2))
  };
  const handleChangeJobDescription = (e) => {
    setNewJobDescription(e.target.value);
    setCount(e.target.value.length)
  };
  const handleChangeRecive = (e) => {
    setReacive(e.target.value);
    setNewHourPrice((e.target.value / 0.9).toFixed(2));
  };
// console.log(object.skills)
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section style={{ width: "70%" }}>
          <StylePadding>
            <Title>
              <TitleJob>
                <H3 style={{ fontWeight: 600 }}>
                  <span>{object?.data.jobTitle}</span>
                  &nbsp;
                  <JobTitleModal
                    title="Edit your title"
                    description="Your title Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience)"
                    handleSave={() => {
                      dispatch(editJobTitle(id, object, newJobTitle))
                    }}
                    btnId='1'
                    formId='1'
                    handleEdit={() => {
                      dispatch(editJobTitle(id, object?.data, newJobTitle))
                    }}
                  >
                    <Input
                      value={newJobTitle}
                      name="jobTitle"
                      id="jobTitle"
                      handleChange={(e) => setNewJobTitle(e.target.value)}
                      padding="20px"
                    />
                  </JobTitleModal>
                </H3>
              </TitleJob>
              <TitleHour>
                <H4 style={{ fontWeight: 700 }}>
                  <span>${object?.data.price}.00/hr</span>
                  <HourRateModal
                    title="Change hourly rate"
                    description="Please note that your new hourly rate will only apply to new contracts."
                    btnId='2'
                    handleSave={() => dispatch(editHourPrice(id, object?.data, newHourPrice))}
                    formId='2'
                    handleEdit={() => dispatch(editHourPrice(id, object?.data, newHourPrice))}
                  >
                    <Body2 style={{ color: colors.palette.gray1, marginBottom: "40px" }}
                    >Your profile rate: ${object?.data.price}.00/hr</Body2>
                    <StyleFlex>
                      <StyledColumn>
                        <StyleLable htmlFor="hourlyRate">Hourly Rate
                          <span>Total amount the client will see</span>
                        </StyleLable>
                        {errors.hourlyRate && <Error>{errors?.hourlyRate?.message}</Error>}
                      </StyledColumn>
                      <StyledFlexPure>
                        <Input
                          padding='10px'
                          id='hourlyRate'
                          name='hourlyRate'
                          register={register}
                          placeholder='$0.00'
                          value={newHourPrice}
                          handleChange={handleChangeHourPrice}
                        /><Body2>/hr</Body2></StyledFlexPure>
                    </StyleFlex>
                    <Horizantial />
                    <StyleFlex>
                      <StyledColumn>
                        <StyleLable htmlFor="fee">10% Upwork Service Fee
                        </StyleLable>
                      </StyledColumn>
                      <StyledFlexPure>
                        <Input
                          padding='10px'
                          id='fee'
                          name='fee'
                          register={register}
                          placeholder='-$0.00'
                          value={`-$${(newHourPrice * (0.1))?.toFixed(2)}`}
                          disable={true}
                          handleChange={() => { }}
                        /><Body2>/hr</Body2></StyledFlexPure>
                    </StyleFlex>
                    <Horizantial />
                    <StyleFlex>
                      <StyledColumn>
                        <StyleLable htmlFor="recived">You'll Receive
                          <span>The estimated amount you'll receive after service fees
                            &nbsp;<span>{ReciveRate}</span>
                          </span>
                        </StyleLable>
                        {errors.recived && <Error>{errors.recived.message}</Error>}
                      </StyledColumn>
                      <StyledFlexPure>
                        <Input
                          padding='10px'
                          id='received'
                          name='received'
                          placeholder='$0.00'
                          value={recive}
                          handleChange={handleChangeRecive}
                        /><Body2>/hr</Body2></StyledFlexPure>
                    </StyleFlex>
                  </HourRateModal>
                </H4>
              </TitleHour>
            </Title>
            <StyledFlexEquleSapces>
              <LightBody1>{object?.data.jobDescription}</LightBody1>
              <JobDescriptionModal
                title="Overview"
                description="Use this space to show clients you have the skills and experience they're looking for.
                Describe your strengths and skills
                Highlight projects, accomplishments and education
                Keep it short and make sure it's error-free"
                handleSave={() => dispatch(editJobDescription(id, object, newJobDescription))}
                btnId='3'
                formId='3'
                handleEdit={() => dispatch(editJobDescription(id, object?.data, newJobDescription))}
              >
                <TextArea
                  value={newJobDescription}
                  name="jobTitle"
                  id="jobTitle"
                  handleChange={handleChangeJobDescription}
                  maxLen={500}
                />
                <Body5 style={{ textAlign: "right" }}>{500 - count} characters left</Body5>
              </JobDescriptionModal>
            </StyledFlexEquleSapces>
          </StylePadding>
          <StylePadding>
            <StyledColumn gap="10px">
              <H4 style={{ fontWeight: 500 }}>Work history</H4>
              <Body3>
                No work yet. Once you start getting hired on Upwork, your work
                with clients will show up here.
              </Body3>
            </StyledColumn>
          </StylePadding>
          <StylePadding>
            <StyledColumn style={{ height: "350px" }}>
              <StyleFlex
                style={{
                  width: "max-content",
                  gap: "10px",
                  alignItems: "CENTER",
                }}
              >
                <H5>Portfolio </H5>
                <ProfileModal add></ProfileModal>
              </StyleFlex>
              <StyledColumnCenter>
                <div>
                  <img src="/assets/protofile.png" alt="protofile" />
                </div>
                <Body3>
                  Talent who add portfolios to their profile are more likely to
                  win work. (+20%)
                </Body3>
                <AddTo href="#">Add a portfolio</AddTo>
              </StyledColumnCenter>
            </StyledColumn>
          </StylePadding>
          <StylePadding>
            <StyleFlex style={{ width: "max-content", gap: "10px" }}>
              <H5>Skills</H5>
              <ProfileModal title="Edit skills" description="Skills"
                btnId='4'>
                <Autocomplete
                  filterSelectedOptions
                  multiple
                  id="tags-outlined"
                  sx={{
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: colors.border.dark,
                    },
                  }}
                  options={skills}
                  getOptionLabel={(option) => option.label}
                  onChange={(e, s) => {
                    e.preventDefault();
                    setUserSkills(s);
                  }}
                  value={userSkills}
                  isOptionEqualToValue={(option, value) => option.label === value}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        style={{ background: colors.palette.green, color: colors.palette.white }}
                        label={option.label}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Search Skills" />
                  )}
                />
              </ProfileModal>
            </StyleFlex>
            <GapFlex style={{ marginTop: "15px" }}>
              {object?.skills.map((skill) => (
                <Chip
                  label={skill.label}
                  key={skill.value}
                  sx={{
                    "&&:hover": {
                      backgroundColor: colors.palette.gray2,
                    },
                  }}
                />
              ))}
            </GapFlex>
          </StylePadding>
        </section >
      )
      }
    </>
  );
}
