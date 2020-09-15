import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import LoadingPage from './pages/loading';
import './App.scss';
import styled from 'styled-components';

const CreatePostPage = React.lazy(() => import('./pages/create-post'));
const PostsPage = React.lazy(() => import('./pages/posts'));
const Navbar = React.lazy(() => import('./components/navbar'));

const NavBarContainer = styled(Box)`
    width: calc(20% - 20px);
    max-width: 280px;
`;

const AppContainer = styled(Box)`
    width: 80%;
`;

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Box display="flex">
                    <NavBarContainer>
                        <Suspense fallback={<LoadingPage />}>
                            <Navbar />
                        </Suspense>
                    </NavBarContainer>
                    <AppContainer>
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
                    </AppContainer>
                </Box>
            </div>
        </Router>
    );
};

export default App;
