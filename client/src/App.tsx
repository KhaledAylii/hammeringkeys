import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import LoadingPage from './pages/loading';
import './App.scss';

const CreatePostPage = React.lazy(() => import('./pages/create-post'));
const Navbar = React.lazy(() => import('./components/navbar'));

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Box display="flex">
                    <Box>
                        <Suspense fallback={LoadingPage}>
                            <Navbar />
                        </Suspense>
                    </Box>
                    <Box>
                        <Switch>
                            <Route path="/posts/create">
                                <Suspense fallback={LoadingPage}>
                                    <CreatePostPage />
                                </Suspense>
                            </Route>
                            <Route path="/"></Route>
                        </Switch>
                    </Box>
                </Box>
            </div>
        </Router>
    );
};

export default App;
