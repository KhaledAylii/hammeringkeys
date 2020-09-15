import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import axios from 'axios';
import Post from '../../components/post';
import styled from 'styled-components';
import Loading from '../loading';

const PostsContainer = styled(Box)`
    padding: 30px 50px;
`;

const StyledPostsGrid = styled(Grid)`
    max-width: 1000px;
`;

export const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get('/api/posts')
            .then((data) => {
                setPosts(data?.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {loading && <Loading />}
            {!loading && (
                <PostsContainer display="flex" justifyContent="center">
                    <StyledPostsGrid container spacing={4} justify="center">
                        {posts.map((post) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Post
                                    title={post.title}
                                    body={post.body}
                                    thumbnailURL={post.thumbnailURL}
                                />
                            </Grid>
                        ))}
                    </StyledPostsGrid>
                </PostsContainer>
            )}
        </>
    );
};
