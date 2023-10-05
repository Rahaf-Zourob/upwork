import React, { useEffect, useRef, useState } from 'react'
import MainLayout from '@/Layout/MainLayout'
import { StyleFlex } from '@/styles/commen'
import SalutingBox from '../SalutingBox'
import SearchJob from '../SearchJob'
import ProfileCard from '../ProfileCard'
import Jobs from '../Jobs'
import { ScrollTop } from './style'
import { ScrollArrow } from '@/svg/HomeImges'

export default function HomePageContent() {
  let resultsRef = useRef();
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const distanceFromTop = window.scrollY;
      setShowBtn(distanceFromTop >= 200);
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <MainLayout>
      <ScrollTop ref={resultsRef} onClick={handleScrollToTop} style={{ visibility: showBtn ? 'visible' : 'hidden' }}>
        {ScrollArrow}
      </ScrollTop>
      <StyleFlex>
        <main style={{ "width": "70%" }}>
          <SalutingBox />
          <SearchJob />
          <Jobs />
        </main>
        <ProfileCard />
      </StyleFlex>
    </MainLayout>
  );
}
