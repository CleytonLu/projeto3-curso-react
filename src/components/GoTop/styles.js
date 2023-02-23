import styled, { css } from 'styled-components';
export const Container = styled.a`
    ${({ theme }) => css`
        position: fixed;
        background-color: ${theme.colors.primaryColor};
        color: ${theme.colors.white};
        display: flex;
        width: 4rem;
        height: 4rem;
        justify-content: center;
        align-items: center;
        bottom: 2rem;
        right: 2rem;
    `}
`;
