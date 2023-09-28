import { colors } from '@/styles/colors'
import React from 'react'
import { SideBar, TitleBar } from './style'
import ProfileModal from '@/modals/ProfileModals'
import { Title } from '../ProfileDescriprion/style'
import { Body3, H3, H4, H5, H6, LightBody1 } from '@/components/atoms/Typography/style'
import { ProfileSideBar } from '@/mock/profileSideBar'
import { StyledColumn } from '@/styles/commen'

export default function ProfileSide({ eduction }) {
    return (
        <aside style={{ width: "30%" }}>
            <SideBar>
                {ProfileSideBar.map((item) => (
                    <TitleBar key={item.title}>
                        <StyledColumn>
                        <H5>
                            <span>{item.title}</span>
                            {item.addEdit && <ProfileModal add />}
                            {item.add ? <ProfileModal add></ProfileModal> : <ProfileModal></ProfileModal>}
                        </H5>
                        {item.data && <Body3>{item.data === 'education' ? eduction : item.data}</Body3>}
                        </StyledColumn>
                    </TitleBar>
                ))}
            </SideBar>
        </aside>
    );
}
