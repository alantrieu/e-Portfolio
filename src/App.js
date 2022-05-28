import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Homepage from './Components/Content/Homepage';
import AboutMe from './Components/Content/AboutMe';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Homepage />} />
                    <Route path="about" element={<AboutMe />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
