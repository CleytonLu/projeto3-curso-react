import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextContainer } from '../TextComponent/styles';

export const Container = styled.div`
    ${({ theme, background }) => css`
        ${TextContainer} {
            margin-bottom: ${theme.spacings.huge};
        }
    `}
`;

export const Grid = styled.div`
    ${({ theme }) => css`
        counter-reset: grid-counter;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: ${theme.spacings.large};

        @media ${theme.media.lteMedium} {
            grid-template-columns: 1fr;
        }
    `}
`;

export const GridElement = styled.div`
    ${({ theme }) => css`
        ${HeadingContainer} {
            position: relative;
            left: 5rem;
        }

        ${HeadingContainer}::before {
            counter-increment: grid-counter;
            content: counter(grid-counter);
            position: absolute;
            font-size: 8rem;
            top: -3rem;
            left: -5rem;
            transform: rotate(6deg);
        }
    `}
`;

export const Image = styled.img`
    ${({ theme }) => css`
        width: 100%;
        transition: all 300ms ease-in-out;

        &:hover {
            transform: scale(1) rotate(10deg);
        }
    `}
`;
