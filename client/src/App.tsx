import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';
import LoadingPage from './pages/loading';
import './App.scss';
import styled from 'styled-components';

const CreatePostPage = React.lazy(() => import('./pages/create-post'));
const PostsPage = React.lazy(() => import('./pages/posts'));
const Navbar = React.lazy(() => import('./components/navbar'));

const NavBarContainer = styled(Grid)`
    @media (max-width: 600px) {
        display: none;
    }
`;

const AppContainer = styled(Box)`
    width: 100%;
`;

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Grid container>
                    <NavBarContainer item xs={2}>
                        <Suspense fallback={<LoadingPage />}>
                            <Navbar />
                        </Suspense>
                    </NavBarContainer>
                    <Grid item xs={12} sm={10}>
                        <Switch>
                            <Route path="/posts/create">
                                <Suspense fallback={<LoadingPage />}>
                                    <CreatePostPage />
                                </Suspense>
                            </Route>
                            <Route path="/posts">
                                <Suspense fallback={LoadingPage}>
                                    <PostsPage />
                                </Suspense>
                            </Route>
                            <Route path="/"></Route>
                        </Switch>
                    </Grid>
                </Grid>
            </div>
        </Router>
    );
};

export default App;
