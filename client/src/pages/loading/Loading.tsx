import React from 'react';
import { Box } from '@material-ui/core';
import Loader from 'react-loader-spinner';
import * as styles from '../../App.scss';

export const Loading: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100vh"
        >
            <Loader
                type="TailSpin"
                color={styles.colorEmphasized}
                height={100}
                width={100}
            />
        </Box>
    );
};
