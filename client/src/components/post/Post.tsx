import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import styled from 'styled-components';
import * as styles from '../../App.scss';

const StyledCard = styled(Card)`
    width: calc(33% - 20px);
    margin-top: 20px;
    margin-right: 20px;
    background-color: ${styles.colorSecondary};
    color: ${styles.colorTernary};
    @media only screen and (max-width: 900px) {
        width: calc(50% - 20px);
    }
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
