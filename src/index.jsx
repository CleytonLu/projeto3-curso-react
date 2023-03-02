import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';

import Home from './templates/Home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>

            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>
);
