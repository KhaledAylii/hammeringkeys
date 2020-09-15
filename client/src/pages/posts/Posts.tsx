import React from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';
import Post from '../../components/post';

export const Posts: React.FC = () => {
    return (
        <Container>
            <Post />
        </Container>
    );
};
