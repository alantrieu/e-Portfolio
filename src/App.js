// import Homepage from './Components/Homepage/Homepage';
import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {
//   return (
//     <div className="App">
//         <Homepage />
//     </div>
//   );

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </>
    );
};

export default App;
