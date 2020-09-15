import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';
import * as styles from '../../App.scss';

const StyledCard = styled(Card)`
    background-color: ${styles.colorSecondary};
    color: ${styles.colorTernary};
    max-width: 300px;
    margin: auto;
`;

const StyledCardImg = styled.img`
    width: calc(100% + 32px);
    margin: -16px 0px 8px -16px;
    height: 250px;
    object-fit: cover;
`;

export interface PostProps {
    thumbnailURL?: string;
    title: string;
    body?: string;
}

export const Post: React.FC<PostProps> = ({ thumbnailURL, title, body }) => {
    return (
        <StyledCard className="blog-post">
            <CardContent>
                <StyledCardImg
                    className="post-thumbnail"
                    src={thumbnailURL || 'https://source.unsplash.com/random'}
                    title={title}
                />
                <Typography>{title}</Typography>
            </CardContent>
        </StyledCard>
    );
};
