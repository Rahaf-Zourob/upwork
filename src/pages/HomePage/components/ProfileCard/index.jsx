import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { getData } from '@/redux/slices/profile';
import { PATH } from '@/router/path';

import { StyledColumn, StyledColumnCenter } from '@/styles/commen'
import { BorderProfile, Connects, ProfileName, ProfilePhoto } from './style'
import { Body3 } from '@/components/atoms/Typography/style';

export default function ProfileCard() {
    const router = useRouter()
    const { name, object, isLoading } = useSelector((state) => state.profile);
    const dispatch = useDispatch()
    const userName = name?.firstName + " " + name?.lastName
    const handleNavigate = () => {
        router.push(PATH.PROFILE)
    }
    useEffect(()=>{ dispatch(getData(localStorage.getItem('id'))) }, [])
    return (
        <BorderProfile>
            <StyledColumn>
                <StyledColumnCenter>
                    <ProfilePhoto onClick={handleNavigate}>
                        <img src='/assets/avtar.jpg' alt='avtar' />
                    </ProfilePhoto>
                    <ProfileName href={PATH.PROFILE}>{isLoading ? 'Loading...' : (userName?.length > 10 ? userName?.slice(0, 10) + '...' : userName)}</ProfileName>
                    <Body3>{isLoading ? 'Loading...' : object?.data?.jobTitle}</Body3>
                </StyledColumnCenter>
                <Connects href='#'>120 Availble connects</Connects>
            </StyledColumn>
        </BorderProfile>
    )
}