'use client'
import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';

export default function Loading() {
    return (
        <LinearProgress sx={{"margin": "20rem auto"}} color="success" />
    )
}
