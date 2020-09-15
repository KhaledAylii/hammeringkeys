import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import axios from 'axios';
import Post from '../../components/post';
import styled from 'styled-components';
import Loading from '../loading';

const PostsContainer = styled(Box)`
    padding: 20px 50px;
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
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        flexWrap="wrap"
                    >
                        {posts.map((post) => (
                            <Post
                                title={post.title}
                                body={post.body}
                                thumbnailURL={post.thumbnailURL}
                            />
                        ))}
                    </Box>
                </PostsContainer>
            )}
        </>
    );
};
