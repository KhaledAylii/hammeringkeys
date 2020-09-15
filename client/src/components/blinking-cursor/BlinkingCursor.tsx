import React, { useState, useEffect } from 'react';
import { Typography, TypographyProps } from '@material-ui/core';
import styled from 'styled-components';
import * as styles from '../../App.scss';

const StyledCode = styled.code`
    border-right: ${(props) => (props?.className ? '0px' : '3px')} solid
        ${styles.colorTernary};
    margin-right: ${(props) => (props?.className ? '0px' : '-3px')};
`;

export const BlinkingCursor: React.FC<TypographyProps & { text: string }> = ({
    text,
    ...props
}) => {
    const [showCursor, setShowCursor] = useState<boolean>(true);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowCursor(!showCursor);
        }, 800);
        return () => clearInterval(intervalId);
    }, [showCursor]);
    return (
        <>
            <Typography {...props}>
                <StyledCode className={showCursor ? `show-cursor` : undefined}>
                    {text}
                </StyledCode>
            </Typography>
        </>
    );
};
