import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getName } from '@/redux/slices/profile';

import useAuth from '@/hooks/useAuth';
import { DateToday, TimeNow } from '@/constants/date';

import { SalutingByName, SalutingCard, TodayDate } from './style';
import { StyledColumn, StyledFlexEquleSapces } from '@/styles/commen';

export default function SalutingBox() {
  const today = new Date();
  const date = today.getDate();
  const hours = today.getHours();
  const formattedDate = today.toLocaleDateString('en-US', DateToday);
  const Saluting = TimeNow.find(
    (interval) => hours >= interval.start && hours <= interval.end
  ).message;
  const id = (typeof window !== 'undefined') ? localStorage.getItem('id') : ''
  const { name, isLoading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const nth = () => {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      default:
        return 'rd';
    }
  };
  useEffect(() => {
    dispatch(getName())
  }, [])
  const userName = name?.firstName + " " + name?.lastName
  return (
    <SalutingCard>
      <StyledFlexEquleSapces>
        <StyledColumn>
          <TodayDate>
            {formattedDate}
            {nth()}
          </TodayDate>
          <SalutingByName>
            {Saluting}, {isLoading ? 'Loading...' : (userName?.length > 10 ? userName.slice(0, 10) + '.' : userName)}
          </SalutingByName>
        </StyledColumn>
        <div>
          <img src='/assets/saluting.png' alt='saluting img' />
        </div>
      </StyledFlexEquleSapces>
    </SalutingCard>
  );
}
