import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Loader from 'react-loader-spinner';

export const Loading: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="100vh"
        >
            <Loader type="TailSpin" color={''} height={100} width={100} />
        </Box>
    );
};
