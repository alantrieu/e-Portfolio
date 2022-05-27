import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Homepage from './Components/Homepage/Homepage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Homepage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
