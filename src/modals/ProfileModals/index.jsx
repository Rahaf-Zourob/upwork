import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Button from '@/components/atoms/Button';

import { AddModal, CloseModal, EditPen } from '@/svg/ProfileImages';

import { CancleBtn, EditButton, SendBtn, StyleBtn } from './style';
import { StyledFlexEquleSapces } from '@/styles/commen';
import { H4, Body3 } from '@/components/atoms/Typography/style';
import Form from '@/components/atoms/Form';

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

export function ProfileModal({ children, title, description, add, handleSave, btnId }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <EditButton onClick={handleOpen}><div>{add ? AddModal : EditPen}</div></EditButton>
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
                    <Body3 style={{ "marginBottom": "30px" }}>{description}</Body3>
                    {children}
                    <StyleBtn>
                        <CancleBtn onClick={handleClose}>Cancle</CancleBtn>
                        <SendBtn onClick={handleSave} form={btnId}>Save</SendBtn>
                    </StyleBtn>
                </Box>
            </Modal>
        </div>
    );
}

export function JobTitleModal({ children, title, description, add, handleSave, btnId, handleEdit, formId }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <EditButton onClick={handleOpen}><div>{add ? AddModal : EditPen}</div></EditButton>
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
                    <Body3 style={{ "marginBottom": "30px" }}>{description}</Body3>
                    <Form
                        formId={formId}
                        handleSubmitForm={(event) => {
                            event.preventDefault();
                            handleEdit()
                            handleClose()
                        }}>
                        {children}
                    </Form>
                    <StyleBtn>
                        <CancleBtn onClick={handleClose}>Cancle</CancleBtn>
                        <SendBtn onClick={handleSave} form={btnId}>Save</SendBtn>
                    </StyleBtn>
                </Box>
            </Modal>
        </div>
    );
}

export function JobDescriptionModal({ children, title, description, add, handleSave, btnId, handleEdit, formId }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <EditButton onClick={handleOpen}><div>{add ? AddModal : EditPen}</div></EditButton>
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
                    <Body3 style={{ "marginBottom": "30px" }}>{description}</Body3>
                    <Form
                        formId={formId}
                        handleSubmitForm={(event) => {
                            event.preventDefault();
                            handleEdit()
                            handleClose()
                        }}>
                        {children}
                    </Form>
                    <StyleBtn>
                        <CancleBtn onClick={handleClose}>Cancle</CancleBtn>
                        <SendBtn onClick={handleSave} form={btnId}>Save</SendBtn>
                    </StyleBtn>
                </Box>
            </Modal>
        </div>
    );
}

export function HourRateModal({ children, title, description, add, handleSave, btnId, handleEdit, formId }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <EditButton onClick={handleOpen}><div>{add ? AddModal : EditPen}</div></EditButton>
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
                    <Body3 style={{ "marginBottom": "30px" }}>{description}</Body3>
                    <Form
                        formId={formId}
                        handleSubmitForm={(event) => {
                            event.preventDefault();
                            handleEdit()
                            handleClose()
                        }}>
                        {children}
                    </Form>
                    <StyleBtn>
                        <CancleBtn onClick={handleClose}>Cancle</CancleBtn>
                        <SendBtn onClick={handleSave} form={btnId}>Save</SendBtn>
                    </StyleBtn>
                </Box>
            </Modal>
        </div>
    );
}