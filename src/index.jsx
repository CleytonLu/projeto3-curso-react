import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import {theme} from './styles/theme'
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/App/Home';

import styled, {css} from 'styled-components'

const Heading = styled.h1`
    color: purple;
`;

const changeBackground = (theme, bg) => css `
    background: ${bg};
    color: #000;
`

export const Container = styled.div`
    ${({theme, bg}) => css `
        color: ${theme.colors.white}
        ${changeBackground(theme, bg)}
    `}

    ${Heading}{
        color: yellow;
    }
`;

export const Container2 = styled(Container).attrs({as: 'article'})`
    background: blue;
`;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
            <Home />
        <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
