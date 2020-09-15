import React from 'react';
import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';
import * as styles from '../../App.scss';

const NavbarContainer = styled(Box)`
    height: 100vh;
    width: 20vw;
    min-width: inherit;
    max-width: inherit;
    background-color: ${styles.colorSecondary};
    color: ${styles.colorTernary};
    position: fixed;
    box-shadow: 0px 5px 20px -5px #000;
    padding: 10px;
`;

export const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <Typography variant="h5" component="h2">
                <code>hammering keys</code>
            </Typography>
        </NavbarContainer>
    );
};
