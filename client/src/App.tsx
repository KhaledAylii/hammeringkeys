import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Route path="/"></Route>
            </div>
        </Router>
    );
};

export default App;
