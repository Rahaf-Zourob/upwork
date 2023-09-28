import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import JobRaiting from '@/pages/HomePage/components/Jobs/components/JobRating'

import { getJob } from "../../redux/slices/job"
import { PATH } from '@/router/path'

import Loading from '@/pages/loading'

import { BackArrowModal, FlagModale, LevelModal, LocationModal, OpenJobModal, PaymentModal, PriceModal } from '@/svg/HomeImges'

import { AboutJob, ApplayBtn, Contntact, FlagLink, JobBorder, JobLink, PaddingDetails, Payment, PostTime, PriceLevel, Reviews, SaveBtn, Space, StyleFor, StyleOpenPage, StyleSvg, StyledColmanMargin } from './style'
import { Body2, Body5, H4, H5, H6, LightBody1 } from '@/components/atoms/Typography/style'
import { StyledColumn, StyledFlexEquleSapces, StyledSvg } from '@/styles/commen'
import { colors } from '@/styles/colors'

export default function JobModal({ id, handleClose, details ,handleSave}) {
  const { job, isLoading, jobSaved } = useSelector((state) => state.jobs)
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getJob(id)) }, [])
  return (
    <>
      {isLoading ==='true'? <Loading /> :
        (
          <StyledColumn gap='1.8rem'>
            <StyledFlexEquleSapces>
              {details ? <H6 style={{ "fontSize": "28px","marginLeft":"4rem" }}>Job details</H6> :
                <>
                  <StyledSvg style={{ "cursor": 'pointer' }} onClick={handleClose}>{BackArrowModal}</StyledSvg>
                  <StyleOpenPage href={PATH.JOBS + '/' + job?.id} target="_blank" >
                    <StyledSvg>{OpenJobModal}</StyledSvg>Open job in new window</StyleOpenPage>
                </>
              }
            </StyledFlexEquleSapces>
            <JobBorder>
              <StyledColumn>
                <PaddingDetails>
                  <H5>{job?.jobTitle}</H5>
                  <StyledColmanMargin>
                    <JobLink href='#'>{job?.position}</JobLink>
                    <PostTime>{job?.postTime}</PostTime>
                  </StyledColmanMargin>
                  <StyleFor>
                    <StyleSvg color={colors.palette.blue}>{LocationModal}</StyleSvg>
                    <Body2>{job?.postFor}</Body2>
                  </StyleFor>
                </PaddingDetails>
                <PaddingDetails><LightBody1 style={{ "fontWeight": "300", "width": "100%" }}>{job?.jobDescription}</LightBody1></PaddingDetails>
                <PaddingDetails>
                  <PriceLevel>
                    <Space>
                      <StyledSvg>{PriceModal}</StyledSvg>
                      <StyledColumn>
                        <LightBody1>{job?.clientBudget}</LightBody1>
                        <Body5>{job?.type}-price</Body5>
                      </StyledColumn>
                    </Space>
                    <Space>
                      <StyledSvg>{LevelModal}</StyledSvg>
                      <StyledColumn>
                        <LightBody1>{job?.level} level</LightBody1>
                        <Body5>{job?.freelancer}</Body5>
                      </StyledColumn>
                    </Space>
                  </PriceLevel>
                </PaddingDetails>
                <PaddingDetails>
                  <StyledFlexEquleSapces>
                    <StyledColumn gap='1rem'>
                      <H6>Contract-to-hire opportunity</H6>
                      <StyledColumn>
                        <Body2>This lets talent know that this job could become full time.</Body2>
                        <JobLink href='#'>Learn more</JobLink>
                      </StyledColumn>
                    </StyledColumn>
                    <img src='/assets/concrat.png' alt='concrant img' />
                  </StyledFlexEquleSapces>
                </PaddingDetails>
              </StyledColumn>
              <AboutJob>
                <PaddingDetails>
                  <ApplayBtn>Applay Now</ApplayBtn>
                  <SaveBtn onClick={handleSave}>
                    {jobSaved.find((item) => item.id === job?.id) ?
                      <FavoriteOutlinedIcon />
                      : <FavoriteBorderOutlinedIcon />} Save Job</SaveBtn>
                  <FlagLink href='#'><StyleSvg>{FlagModale}</StyleSvg>Flag as inappropriat</FlagLink>
                  <Contntact >Send a proposal for: {job?.sendProposalFor} Connects</Contntact>
                  <Contntact>Available Connects: {job?.AvilableContect}</Contntact>
                </PaddingDetails>
                <PaddingDetails>
                  <H4>About the client</H4>
                  <Payment>
                    <StyledSvg>{PaymentModal}</StyledSvg>
                    Payment method verified
                  </Payment>
                    {job?.rate &&
                  <Reviews><JobRaiting rate={job.rate} />
                    .00&nbsp;of&nbsp;{job?.reviewNum}&nbsp;review
                      </Reviews>}
                </PaddingDetails>
              </AboutJob>
            </JobBorder>
          </StyledColumn>
        )
      }
    </>
  )
}
