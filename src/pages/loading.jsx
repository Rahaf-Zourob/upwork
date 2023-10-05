'use client'

import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
    return (
        <div style={{display: 'flex', justifyContent: 'center',alignItems:'center', width: '100%', height:'100vh'}}>
            <CircularProgress color="success" />
        </div>
    )
}
