import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Podis from './modules/Podis/Podis';
import Laddus from './modules/Laddus/Laddus';
import App from './App';

export const routes: React.ReactNode = (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='podis' element={<Podis />} />
            <Route path='laddus' element={<Laddus />} />
            <Route path='*' element={<App/>} />
        </Routes>
);