import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { PATH } from '@/router/path'
import { LogoImge } from '@/svg/Logo'

import { StyleLogo } from '../AuthHeader/style'
import { ContainerLayOut } from '@/components/atoms/ContainerLayOut/style'
import { StyledFlexEquleSapces } from '@/styles/commen'
import { Header } from './style'
import useAuth from '@/hooks/useAuth';
import RightSide from './components/RightSide';
import ProfileBox from './components/RightSide/components/ProfileBox';

export default function MainHeader() {
  const router = useRouter();
  const { logout } = useAuth()
  const [showList, setShowList] = useState(false)
  const handleShowList = () => {
    setShowList(!showList)
  }
  return (
    <header>
      <Header>
        <ContainerLayOut>
          <StyledFlexEquleSapces>
            <StyleLogo onClick={() => router.push(PATH.HOME)}>{LogoImge}</StyleLogo>
            <RightSide handleClick={handleShowList} />
              {showList ? <ProfileBox /> : ""}
          </StyledFlexEquleSapces>
        </ContainerLayOut>
      </Header>
    </header>
  )
}
