import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Button from '@/components/atoms/Button';

import { AddModal, CloseModal, EditPen } from '@/svg/ProfileImages';

import { EditButton } from './style';
import { StyledFlexEquleSapces } from '@/styles/commen';
import { H4, LightBody1 } from '@/components/atoms/Typography/style';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

export default function ProfileModal({ children, title, description, add }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <EditButton onClick={handleOpen}><div>{add? AddModal : EditPen}</div></EditButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <StyledFlexEquleSapces style={{ "marginBottom": "60px" }}>
                        <H4>{title}</H4>
                        <div style={{ "cursor": "pointer" }} onClick={handleClose}>{CloseModal}</div>
                    </StyledFlexEquleSapces>
                    <LightBody1>{description}</LightBody1>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}