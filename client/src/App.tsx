import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingPage from './pages/loading';
import './App.scss';

const CreatePostPage = React.lazy(() => import('./pages/create-post'));

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/posts/create">
                        <Suspense fallback={LoadingPage}>
                            <CreatePostPage />
                        </Suspense>
                    </Route>
                    <Route path="/"></Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
