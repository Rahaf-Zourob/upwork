import React from 'react';
import Rating from '@mui/material/Rating';

import { colors } from '@/styles/colors';

function JobRaiting({ rate }) {
    return (
        <Rating
            sx={{
                color: colors.palette.green,
                "& svg": { width: "20px", height: "18px" }
            }}
            name="read-only" value={rate} precision={0.5} readOnly />
    );
}

export default JobRaiting;
