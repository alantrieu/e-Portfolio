import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Homepage from './Components/Content/Welcome';
import AboutMe from './Components/Content/AboutMe';
import ContactMe from './Components/Content/ContactMe';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Homepage />} />
                    <Route path="about" element={<AboutMe />} />
                    <Route path="contact" element={<ContactMe />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
